import { Component, OnInit } from '@angular/core';
import { Parent, ParentsService } from 'src/app/services/parents.service';
import { Care, CaresService } from 'src/app/services/cares.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  parents: Parent[] = [];
  caresList: Care[] = [];
  balance: any = [];

  constructor(
    private parentService: ParentsService,
    private caresService: CaresService
  ) {
    this.parentService.getParents().subscribe((data) => (this.parents = data));
    this.caresService.getCares().subscribe((data) => {
      const durationsParent: any[] = [];
      data.forEach((care) => {
        durationsParent.push({
          parent: care.parentId,
          duration: -care.duration,
        });
        durationsParent.push({
          parent: care.caretakerId,
          duration: care.duration,
        });
      });
      this.parents.forEach((parent) => {
        const duration = durationsParent
          .filter((durationParent) => durationParent.parent === parent.id)
          .reduce((acc, current) => {
            return acc + current.duration;
          }, 0);
        this.balance.push({
          parent: parent.name,
          duration: duration,
        });
      });
    });
  }

  ngOnInit(): void {}

  obtainCss(parent: { duration: number }) {
    return parent.duration >= 0 ? 'green' : 'red';
  }
}
