import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {AzsList} from "../model/azs-list.model";
import {Observable, pipe, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {AzsDetailedList} from "../model/azs-detailed-list.model";
import {AzsDetails} from "../model/azs-details.model";
import {FltGasStationsListRequest} from "../model/FltGasStationsListRequest.model";
import {AzsDetailsRequest} from "../model/azs-details-request.model";
import {CorrelationId} from "../model/correlation-id.model";
@Injectable()
export class CrmService {
    constructor(private http: HttpClient) { }
    private serviceURL = environment.crmUrl;
    private crmGasStationListURL = this.serviceURL + '/crm/fltGasStationsList';
    private crmtGasStationDetailedListURL = this.serviceURL + '/crm/fltGasStationsDetailedList';
    private crmGasStationDetails = this.serviceURL + '/crm/fltGasStationDetails';
    private crmGetResultURL = this.serviceURL + '/crm/getResponse';

    /**
     * Получение списка АЗС.
     */
    public postfltGasStationsList (body: FltGasStationsListRequest): Observable<CorrelationId> {
        return this.http.post<CorrelationId>(this.crmGasStationListURL, body);
            // .pipe(
            //     this.handleError(new HttpErrorResponse(body))
            // );
    }

    /**
     * Результаты по списку АЗС.
     * @param corId
     */
    public getResultGasStationsList(corId: string): Observable<AzsList> {
        return this.http.get<AzsList>(this.crmGetResultURL + '/' + corId);
    }

    public postfltGasStationsDetailedList (body: string): Observable<AzsDetailedList> {
        return this.http.post<AzsDetailedList>(this.crmtGasStationDetailedListURL, body);
    }

    public azsDetails(body: AzsDetailsRequest): Observable<CorrelationId> {
        return this.http.post<CorrelationId>(this.crmGasStationDetails, body);
    }

    /**
     * Результаты по списку АЗС.
     * @param corId
     */
    public getResultAzsDetails(corId: string): Observable<AzsDetails> {
        return this.http.get<AzsDetails>(this.crmGetResultURL + '/' + corId);
    }



    //TODO сделать обработку ошибок.
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}