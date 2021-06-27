import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Parent, ParentsService } from 'src/app/services/parents.service';
import { CaresService } from 'src/app/services/cares.service';

@Component({
  selector: 'app-cares-form',
  templateUrl: './cares-form.component.html',
  styleUrls: ['./cares-form.component.scss'],
})
export class CaresFormComponent implements OnInit {
  careForm: FormGroup;
  parents: Parent[] = [];
  selected = '';

  constructor(
    private parentService: ParentsService,
    private caresService: CaresService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.parentService.getParents().subscribe((data) => (this.parents = data));
    this.careForm = this.formBuilder.group({
      parentId: new FormControl([Validators.required]),
      caretakerId: new FormControl([Validators.required]),
      duration: new FormControl([Validators.required]),
      date: new FormControl([Validators.required]),
      hour: new FormControl('', [Validators.required]),
      observations: new FormControl(''),
    });
  }

  get f() {
    return this.careForm.controls;
  }

  ngOnInit(): void {}

  onSubmit() {
    const form = this.careForm.getRawValue();
    if (form.parentId === form.caretakerId) {
      this.dialog.open(ErrorModal);
      return;
    }
    let date = new Date(
      new Date(
        new Date(form.date).setHours(form.hour.split(':')[0])
      ).setMinutes(form.hour.split(':')[1])
    ).toISOString();
    this.caresService
      .postCare({
        parentId: form.parentId,
        caretakerId: form.caretakerId,
        duration: form.duration,
        startDate: date,
        observations: form.observations,
      })
      .subscribe({
        next: (data) => {
          console.log(`creado correctamente ${JSON.stringify(data)}`);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log('ha habido un error', error);
        },
      });
  }
}

@Component({
  template: `<h1 mat-dialog-title>Error</h1>
    <div mat-dialog-content class="mat-typography">
      <p>Los padres no pueden ser iguales</p>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button (click)="onClose()">Cerrar</button>
    </div>`,
})
export class ErrorModal {
  constructor(public dialogRef: MatDialogRef<ErrorModal>) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
