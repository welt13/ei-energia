import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ParentsService } from 'src/app/services/parents.service';

@Component({
  selector: 'app-parents-form',
  templateUrl: './parents-form.component.html',
  styleUrls: ['./parents-form.component.scss'],
})
export class ParentsFormComponent implements OnInit {
  personForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ParentsFormComponent>,
    private parentsServer: ParentsService
  ) {
    this.personForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  hideDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.parentsServer
      .postParent(this.personForm.getRawValue().name)
      .subscribe({
        next: (data) => {
          console.log(`creado correctamente ${JSON.stringify(data)}`);
          this.hideDialog();
        },
        error: (error) => {
          console.log('ha habido un error', error);
        },
      });
  }
}
