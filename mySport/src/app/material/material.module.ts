import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import {MatChipsModule} from '@angular/material/chips';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';



const matmodules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatChipsModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatRadioModule,
  MatCheckboxModule
];

@NgModule({
  imports: [matmodules],
  exports: [matmodules]
})
export class MaterialModule {}
