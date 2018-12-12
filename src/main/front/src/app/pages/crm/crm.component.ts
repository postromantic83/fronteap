import {Component, OnInit} from '@angular/core';
import {ScoutService} from "../../services/scout.service";
import {CrmService} from "../../services/crm.service";
import {FuelStatistic} from "../../model/fuelstatistic.model";
import {AzsList} from "../../model/azs-list.model";

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit{
  public azsList: AzsList;
  public selectedAzs : any;
  constructor (private crmService: CrmService) {  }
  ngOnInit(): void {
  }
  stationList() {
    this.crmService.postfltGasStationsList('мамба-хуямба!').subscribe(
        (azsListResponse: AzsList) => {
          this.azsList = azsListResponse;
        },
        error => {
          console.log('факеншит!');
          console.log(error);
        }
    );
  }
  onRowSelect(event) {
    console.log('ROW SELECTED!');
  }
}
