import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeamlistService } from './teamlist.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
teamListUrl = 'assets/team.json';
  teamList: any = [
    {
      Id: 1,
      Family: 'EVERYWOMAN',
      Given: 'EVE',
      birthDate: '1957-05-10 00:00:00',
      Gender: 'female',
      Identifier: 'www.mypatientidentifier.com|201903141247-P-BBB',
      Team: 'Toronto Lionss',
      Position: 'Midfielders'
    },
    {
      Id: 2,
      Family: 'Smith',
      Given: 'Maria',
      birthDate: '1909-09-12 00:00:00',
      Gender: 'female',
      Identifier: 'http://hl7.org/fhir/sid/us-ssn|999-26-8666',
      Team: 'Toronto Lions',
      Position: 'Defense'
    },
    {
      Id: 3,
      Family: 'Jones',
      Given: 'Seema',
      birthDate: '1909-09-12 00:00:00',
      Gender: 'male',
      Identifier: 'http://hospital.smarthealthit.org|d8d38a4f-4938-42b2-af18-61b5fddbcf3',
      Team: 'Toronto Lions',
      Position: 'Midfielder'
    },
    {
      Id: 4,
      Family: 'Marks830',
      Given: 'Domenic627',
      birthDate: '1975-09-03 00:00:00',
      Gender: 'male',
      Identifier: 'http://hl7.org/fhir/sid/us-ssn|999-48-8116',
      Team: 'Toronto Lions',
      Position: 'Defense'
    },
    {
      Id: 5,
      Family: 'Campos',
      Given: 'Alan',
      birthDate: '1971-12-28 00:00:00',
      Gender: 'male',
      Identifier: 'http://hl7.org/fhir/sid/us-ssn|999-73-7021',
      Team: 'Minessotta Stars',
      Position: 'Defense'
    }
  ];

  constructor(private teamlist: TeamlistService,
              private httpclient: HttpClient) {
//    this.teamList = teamlist;
   }

  ngOnInit(): void {
    this.teamList = this.teamlist.getTeamList();
    console.log('I am team component');
  }

}
