import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TeamComponent } from './team/team.component';
import { RouterModule } from '@angular/router';
import { FhirMemberHlthComponent } from './fhir-member-hlth/fhir-member-hlth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ObservationComponent } from './observation/observation.component';
import { MembselComponent } from './membsel/membsel.component';
import { DrscreenComponent } from './drscreen/drscreen.component';
import { SeqsymtomsComponent } from './seqsymtoms/seqsymtoms.component';
import { AutosymptomComponent } from './autosymptom/autosymptom.component';
import { SymptomComponent } from './symptom/symptom.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TeamComponent,
    FhirMemberHlthComponent,
    ObservationComponent,
    MembselComponent,
    DrscreenComponent,
    SeqsymtomsComponent,
    AutosymptomComponent,
    SymptomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
//    {path: '', component: TeamComponent},
    {path: '', component: MembselComponent },
    {path: 'symptom', component: SeqsymtomsComponent },
    {path: 'sym', component: SymptomComponent },

    {path: 'autosymptom', component: AutosymptomComponent },

// {path: 'drscreen', component:DrscreenComponent},
    {path: 'membHealth/:id', component: FhirMemberHlthComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FormFieldOverviewExample {}
