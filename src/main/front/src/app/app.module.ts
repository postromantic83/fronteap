import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  AccordionModule,
  ButtonModule,
  CalendarModule, CheckboxModule, DialogModule,
  DropdownModule, GMapModule,
  InputSwitchModule, InputTextModule, PaginatorModule,
  PanelModule,
  TabViewModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ScoutService} from './services/scout.service';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {RouterModule, Routes} from '@angular/router';
import {CrmComponent} from './pages/crm/crm.component';
import {ScoutComponent} from './pages/scout/scout.component';
import {UnitPickerComponent} from './pages/scout/unit-picker.component';
import {CrmService} from "./services/crm.service";

const routes: Routes = [
  {path: '', redirectTo: '/scout', pathMatch: 'full'},
  {path: 'scout', component: ScoutComponent},
  {path: 'crm', component: CrmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ScoutComponent,
    CrmComponent,
    UnitPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
    DialogModule,
    TableModule,
    TabViewModule,
    HttpClientModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    FormsModule,
    ButtonModule,
    GMapModule,
    DropdownModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ScoutService, CrmService],
  bootstrap: [AppComponent]
})


export class AppModule {

}
