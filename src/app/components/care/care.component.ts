import { Component, Input, OnInit } from '@angular/core';
import { Care } from 'src/app/services/cares.service';
import { Parent } from 'src/app/services/parents.service';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss'],
})
export class CareComponent implements OnInit {
  @Input() care!: Care;
  @Input() parents!: Parent[];
  parent: Parent | undefined;
  caretaker: Parent | undefined;

  constructor() {}

  ngOnInit(): void {
    this.parent = this.parents.find(
      (parent) => parent.id === this.care.parentId
    );
    this.caretaker = this.parents.find(
      (parent) => parent.id === this.care.caretakerId
    );
  }
}
