import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { R4 } from '@ahryman40k/ts-fhir-types';
import { TeamlistService, IPersonDb } from '../team/teamlist.service';
import { Observable } from 'rxjs';
const urlType = {
  condition: 'http://fhir.hl7fundamentals.org/r4/Condition?patient.identifier=',
  allergy:
    'http://fhir.hl7fundamentals.org/r4/AllergyIntolerance?patient.identifier=',
  medication:
    'http://fhir.hl7fundamentals.org/r4/MedicationRequest?patient.identifier=',
  immunization:
    'http://fhir.hl7fundamentals.org/r4/Immunization?patient.identifier=',
};

export interface Teaminfo{
  Family: string;
  Given: string;
  Birthdate: string;
  identifier: string;
  Team: string;
  TeamPosition: string;
}
// const bund : R4.IBundle;

@Component({
  selector: 'app-fhir-member-hlth',
  templateUrl: './fhir-member-hlth.component.html',
  styleUrls: ['./fhir-member-hlth.component.css'],
})
export class FhirMemberHlthComponent implements OnInit {
  constructor(
    private teamlist: TeamlistService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}
  public team_memb: IPersonDb;
  patient: R4.IPatient;
  condition: any;
  medication: any;
  allergy: any;
  immunization: any;
  everything: any;
  practList: R4.IPractitioner[];
  city: string =' ';

  //everything url: http://fhir.hl7fundamentals.org/r4/Patient/148961/$everything

  // Patient id search url: http://fhir.hl7fundamentals.org/r4/Patient?identifier=www.mypatientidentifier.com|201903141247-P-BBB
  baseurl = 'http://fhir.hl7fundamentals.org/r4/Patient?identifier=';
  public url: string;
  practurl= 'http://fhir.hl7fundamentals.org/r4/Practitioner?address-city=' + this.city + '&_revinclude=PractitionerRole:practitioner';
  // 1.Create a URL using identifier in the database
  // 2. send the http request to obtin the member demographic data on the server
  ngOnInit(): void {
    //   getMemberHlthDemographics()
    const id = this.route.snapshot.params['id'];
    //      console.log(this.teamlist.getTeamList());
    this.team_memb = this.teamlist.getTeamList()[id - 1];
    this.url = this.baseurl + this.team_memb.Identifier;

    this.http.get<any>(this.url).subscribe(
      (data) => {
        console.log(data.entry[0].resource);
        this.patient = data.entry[0].resource;
        this.city = data.entry[0].resource.address[0].city;
        console.log(this.patient);
        const everytingUrl = 'http://fhir.hl7fundamentals.org/r4/Patient/' + this.patient.id + '/$everything';

        this.http.get<R4.IBundle>(everytingUrl)
        .subscribe(
          everydata => {
            console.log('everydata');
            console.log(everydata);
            this.everything = everydata;
          }
        )

      }
      );
    this.http
      .get<R4.ICondition>(urlType.condition + this.team_memb.Identifier)
      .subscribe( data1 => {
        console.log('Condition');
        this.condition = data1;
        console.log(data1);
      });
    this.http
      .get<R4.IAllergyIntolerance>(urlType.allergy + this.team_memb.Identifier)
      .subscribe(data2 => {
        console.log('Allergy');
        this.allergy = data2;
        console.log(data2);
      });
    this.http
      .get<any>(urlType.immunization + this.team_memb.Identifier)
      .subscribe(data3 => {
        console.log('Immunization');
        this.immunization = data3;
        console.log(data3);
      });

    this.http
      .get<R4.IMedication>(urlType.medication + this.team_memb.Identifier)
      .subscribe(data4 => {
        console.log('Medication');
        this.medication = data4;
        console.log(data4);
      });

      // practioner city search: http://fhir.hl7fundamentals.org/r4/Practitioner?address-city=MELROSE&_revinclude=PractitionerRole:practitioner
      // Practioner Search: http://fhir.hl7fundamentals.org/r4/PractitionerRole?practitioner.address-city=Montreal,Somerville&_include=PractitionerRole:practitioner&_include=PractitionerRole:organization
    this.http
      .get<any>(this.practurl)
      .subscribe(data5 => {
        console.log('PractList');
        this.practList = data5.entry;
        console.log(this.practList);
      });

    }
  getPatientInfo(): Observable<R4.IPatient> {
    return this.http.get<R4.IPatient>(this.url);
  }
}
