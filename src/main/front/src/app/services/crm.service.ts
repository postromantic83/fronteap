import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {AzsList} from "../model/azs-list.model";
import {Observable, pipe, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
@Injectable()
export class CrmService {
    constructor(private http: HttpClient) { }
    private serviceURL = environment.crmUrl;
    private scoutGasStationListURL = this.serviceURL + '/crm/mock/fltGasStationsList';
    private scoutGasStationDetailedListURL = this.serviceURL + '/crm/mock/fltGasStationsDetailedList';

    /**
     * Получение списка АЗС.
     */
    public postfltGasStationsList (body: string): Observable<AzsList> {
        console.log('URL: ' + 'http://' + this.scoutGasStationListURL);
        return this.http.post<AzsList>('http://' + this.scoutGasStationListURL, body);
            // .pipe(
            //     this.handleError(new HttpErrorResponse(body))
            // );
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