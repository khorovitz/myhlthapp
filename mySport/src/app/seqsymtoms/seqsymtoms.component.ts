import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

export interface Symptom {
  name: string;
}
@Component({
  selector: 'app-seqsymtoms',
  templateUrl: './seqsymtoms.component.html',
  styleUrls: ['./seqsymtoms.component.css'],
})
export class SeqsymtomsComponent implements OnInit {
  fruits: Symptom[] = [
    { name: 'fever' },
    { name: 'Cough and Muscle Pain' },
    { name: 'Loss of Smell or Taste' },
    { name: 'nausea or vomiting' },
    { name: 'diarrhea' }
  ];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  ngOnInit(): void {
//    throw new Error('Method not implemented.');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Symptom): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
