import {Component, OnInit} from '@angular/core';
import {CrmService} from "../../services/crm.service";
import {AzsList} from "../../model/azs-list.model";
import {AzsDetailedList} from "../../model/azs-detailed-list.model";
import {AzsDetails} from "../../model/azs-details.model";
import {FltGasStationsListRequest} from "../../model/FltGasStationsListRequest.model";
import {AzsDetailsRequest} from "../../model/azs-details-request.model";

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit{
  public azsList: AzsList;
  public azsDetailedList: AzsDetailedList;
  public azsDetails: AzsDetails;
  public selectedAzs : any;
  public azsDialogVisible: boolean;
  public gMapDialogVisible: boolean;
  public overlays: any[];
  public fuelCardsAvailable: boolean = false;
  public loyalCardsAvailable: boolean = false;
  public bankCardsAvailable: boolean = false;
  public dateLastChange: Date;
  public fuelCardsFilterSelect: boolean;
  public loyalCardsFilterSelect: boolean;
  public bankCardsFilterSelect: boolean;
  options: any;
  constructor (private crmService: CrmService) {  }
  ngOnInit(): void {
  }
  stationList() {
    let requestBody = new FltGasStationsListRequest();
    requestBody.AmndDate = this.dateLastChange.getMonth() + '/' + this.dateLastChange.getDay() + '/'
        + this.dateLastChange.getFullYear();
    requestBody.FLTCards = this.true2Y(this.fuelCardsFilterSelect);
    requestBody.LTYCards = this.true2Y(this.loyalCardsFilterSelect);
    requestBody.GPBCards = this.true2Y(this.bankCardsFilterSelect);
    this.crmService.postfltGasStationsList(requestBody).subscribe(
        (azsListResponse: AzsList) => {
          this.azsList = azsListResponse;
        },
        error => {
          console.log('факеншит!');
          console.log(error);
        }
    );
  }
  stationDetailsList(){
    this.crmService.postfltGasStationsDetailedList('empty string').subscribe(
        (azsDetailsListResponse: AzsDetailedList) => {
          this.azsDetailedList = azsDetailsListResponse;
        },
        error => {
          console.log('факеншит!');
          console.log(error);
        }
    );
  }

  details(inId: string){
    let requestBody = new AzsDetailsRequest();
    requestBody.ID = inId;
    this.crmService.azsDetails(requestBody).subscribe(
        (azsDetailsResponse: AzsDetails) => {
          this.azsDetails = azsDetailsResponse;
          this.fuelCardsAvailable = this.y2True(this.azsDetails.data.FLTCards);
          this.loyalCardsAvailable =  this.y2True(this.azsDetails.data.LTYCards);
          this.bankCardsAvailable =  this.y2True(this.azsDetails.data.GPBCards);
        },
        error => {
          console.log('факеншит!');
          console.log(error);
        }
    );
  }
  onRowSelect(event) {
    console.log('ROW SELECTED! ' + event.data.ID);
  }
  onRowButton(data: any) {
    console.log('Extracting data AZS: ' + data.ID);
    this.details(data.ID);
    this.azsDialogVisible = true;
  }
  onRowButtonMap(data: any) {
    this.gMapDialogVisible = true;
    console.log('AZS SELECTED! ' + data.ID);
    this.details(data.ID);
    let laty :number = Number(this.azsDetails.data.Latitude);
    let longti :number = Number(this.azsDetails.data.Longitude);

    this.options = {
      center: {lat: laty, lng: longti},
      zoom: 20};
      this.overlays = [];
  }
  private y2True(value: string): boolean {
    if (value === 'Y') {
      return true;
    }
    return false;
  }
  private true2Y(value:boolean): string {
    if (value === true) {
      return 'Y';
    }
    return '';
  }
}
