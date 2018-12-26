import {Component, OnInit} from "@angular/core";
import {McService} from "../../services/mc.service";
import {FuelStatistic} from "../../model/fuelstatistic.model";
import {McAzs} from "../../model/mc/mcAzs.model";
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-mc',
    templateUrl: './mc.component.html',
    styleUrls: ['./mc.component.css'],
    providers: [MessageService]
})
export class McComponent implements OnInit {
    constructor (private mcService: McService, private messageService: MessageService) {  }
    ngOnInit(): void {
    }
    public azsList: McAzs[];
    getAzsList(){
        console.log('Получение списка АЗС из МК');
        this.mcService.getAzsList().subscribe(
            (azsListResponse: McAzs[]) => {
                this.azsList = azsListResponse;
                this.showSuccess();
            },
            error => {
                this.showError(error);
                console.log(error);
            }
        );
    }
    showError(serviceMessage: string) {
        this.messageService.add({severity:'error', summary: 'Ошибка', detail:'Ошибка обращения к сервису: ' +
                serviceMessage});
    }

    showSuccess() {
        this.messageService.add({severity:'success', summary: 'Получение', detail:'Данные получены!'});
    }
}