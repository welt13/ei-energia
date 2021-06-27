import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Care, CaresService } from 'src/app/services/cares.service';
import { Parent, ParentsService } from 'src/app/services/parents.service';
import { ParentsFormComponent } from '../parents-form/parents-form.component';

@Component({
  selector: 'app-cares',
  templateUrl: './cares.component.html',
  styleUrls: ['./cares.component.scss'],
})
export class CaresComponent implements OnInit {
  caresList: Care[] = [];
  parentsList: Parent[] = [];

  constructor(
    private caresService: CaresService,
    private parentsService: ParentsService,
    public dialog: MatDialog
  ) {
    this.parentsService
      .getParents()
      .subscribe((data) => (this.parentsList = data));
    this.caresService.getCares().subscribe(
      (data) =>
        (this.caresList = data.sort((elem1, elem2) => {
          if (elem1.startDate < elem2.startDate) {
            return 1;
          }
          if (elem1.startDate > elem2.startDate) {
            return -1;
          }
          return 0;
        }))
    );
  }

  ngOnInit(): void {}

  openPersonForm(): void {
    this.dialog.open(ParentsFormComponent, {
      width: '500px',
    });
  }
}
