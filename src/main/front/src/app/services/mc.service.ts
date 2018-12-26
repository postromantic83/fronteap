import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {AzsList} from "../model/azs-list.model";
import {McAzs} from "../model/mc/mcAzs.model";

@Injectable()
export class McService {
    constructor(private http: HttpClient) {
    }

    private serviceURL = environment.mcUrl;
    private mcGetAzsUrl = this.serviceURL + '/mc-api/getAzsList';

    public getAzsList(): Observable<McAzs[]> {
        return this.http.get<McAzs[]>(this.mcGetAzsUrl);
    }

}