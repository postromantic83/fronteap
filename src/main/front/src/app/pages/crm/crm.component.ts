import {Component, OnInit} from '@angular/core';
import {CrmService} from "../../services/crm.service";
import {AzsList} from "../../model/azs-list.model";
import {AzsDetailedList} from "../../model/azs-detailed-list.model";
import {AzsDetails} from "../../model/azs-details.model";

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
  options: any;
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
  stationDetailsList(){
    this.crmService.postfltGasStationsDetailedList('мамба-хуямба!').subscribe(
        (azsDetailsListResponse: AzsDetailedList) => {
          this.azsDetailedList = azsDetailsListResponse;
        },
        error => {
          console.log('факеншит!');
          console.log(error);
        }
    );
  }

  details(){
    this.crmService.postDetails('мамба-хуямба!').subscribe(
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
    this.details();
    this.azsDialogVisible = true;
  }
  onRowButtonMap(data: any) {
    this.gMapDialogVisible = true;
    console.log('AZS SELECTED! ' + data.ID);
    this.details();
    let laty :number = Number(this.azsDetails.data.Latitude);
    let longti :number = Number(this.azsDetails.data.Longitude);

    this.options = {
      // center: {lat: this.azsDetails.data.Latitude.valueOf(), lng: this.azsDetails.data.Longitude.valueOf()},
      center: {lat: laty, lng: longti},
      zoom: 20};
    this.overlays = [
      // new google.maps.Marker({position: {lat: laty, lng: longti}, title:"Газпромнефть"}),
    ];
  }
  private y2True(value: string): boolean {
    if (value === 'Y') {
      return true;
    }
    return false;
  }
}
