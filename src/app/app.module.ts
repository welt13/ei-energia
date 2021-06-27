import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CaresComponent } from './components/cares/cares.component';
import { CaresFormComponent } from './components/cares-form/cares-form.component';
import { ParentsFormComponent } from './components/parents-form/parents-form.component';
import { CareComponent } from './components/care/care.component';
import { MaterialModule } from './modules/material.module';
import { DurationPipe } from './pipes/duration.pipe';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    CaresComponent,
    CaresFormComponent,
    ParentsFormComponent,
    CareComponent,
    DurationPipe,
    BalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
