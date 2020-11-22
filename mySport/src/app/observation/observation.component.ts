import { Component, OnInit } from '@angular/core';

// only three things are changing; 1. patient id ${pid}, 2. sbp ${svalue}and 3. ${dvalue}
let pid:string;
let svalue: number;
let dvalue: number;

const obsbp : string = `{
  "resourceType": "Observation",
  "status": "final",
  "category": [
     {
        "coding": [
           {
              "system": "http://terminology.hl7.org/CodeSystem/observation-category",
              "code": "vital-signs",
              "display": "vital-signs"
           }
        ]
     }
  ],
  "code": {
     "coding": [
        {
           "system": "http://loinc.org",
           "code": "55284-4",
           "display": "Blood Pressure"
        }
     ],
     "text": "Blood Pressure"
  },
  "subject": {
     "reference": "Patient/${pid}"
  },
  "encounter": {
     "reference": "Encounter/82"
  },
  "effectiveDateTime": "2018-07-08T12:58:37-07:00",
  "issued": "2018-07-08T12:58:37.662-07:00",
  "component": [
     {
        "code": {
           "coding": [
              {
                 "system": "http://loinc.org",
                 "code": "8462-4",
                 "display": "Diastolic Blood Pressure"
              }
           ],
           "text": "Diastolic Blood Pressure"
        },
        "valueQuantity": {
           "value": ${svalue},
           "unit": "mmHg",
           "system": "http://unitsofmeasure.org",
           "code": "mmHg"
        }
     },
     {
        "code": {
           "coding": [
              {
                 "system": "http://loinc.org",
                 "code": "8480-6",
                 "display": "Systolic Blood Pressure"
              }
           ],
           "text": "Systolic Blood Pressure"
        },
        "valueQuantity": {
           "value": ${dvalue},
           "unit": "mmHg",
           "system": "http://unitsofmeasure.org",
           "code": "mmHg"
        }
     }
  ]
}`;

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
svalue: number;
dvalue: number;
  constructor() { }

  ngOnInit(): void {

  }
  submit(){console.log('Hello I am submit', this.dvalue, this.svalue)}

}
