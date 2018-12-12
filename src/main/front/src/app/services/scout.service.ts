import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Unit} from '../model/unit.model';
import {FuelStatistic} from '../model/fuelstatistic.model';
import {OdoStatistic} from '../model/odo_statistic.model';
import {environment} from "../../environments/environment";

/**
 * Сервис для обращения к шине данныех.
 */
@Injectable()
export class ScoutService {
  constructor(private http: HttpClient) { }
  private serviceURL = environment.scoutUrl;
  private scoutIdsURL = this.serviceURL + '/scout/api/units/availableIds';
  private scoutFuelURL = this.serviceURL + '/scout/statistics/fuel?';
  private scoutOdoURL = this.serviceURL + '/scout/statistics/odometer?';

  /**
   * Получение списка техники.
   */
  public getUnits (): Observable<number[]> {
    return this.http.get<number[]>(this.scoutIdsURL);
  }

  /**
   * Получение статистики по топливу.
   * @param unit - ид техники
   * @param startDate - начало
   * @param endDate - окончание
   * @param dayly - тип отчета по дням
   */
  public getFuel(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): Observable<FuelStatistic> {
    console.log('ENV VALUE: ' + this.serviceURL);
    console.log('Date To String:' + startDate.getFullYear() + '%2F' + startDate.getMonth() + '%2F' + startDate.getDate() + ' 00:00:00');
    return this.http.get<FuelStatistic>(this.scoutFuelURL +
      this.requestHelper(unit, startDate, endDate, dayly));
  }

  /**
   * Получение статистики по одометру.
   * @param unit - ид техники
   * @param startDate - начало
   * @param endDate - окончание
   * @param dayly - тип отчета по дням
   */
  public getOdometer(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): Observable<OdoStatistic> {
    return this.http.get<OdoStatistic>(this.scoutOdoURL +
      this.requestHelper(unit, startDate, endDate, dayly));
  }
  private requestHelper(unit: Unit, startDate: Date, endDate: Date, dayly: boolean): string {
    let pathstring = 'request.unitId=' + unit.id + '&request.beginDateTime=' + startDate.getFullYear() + '%2F' + startDate.getMonth()
      + '%2F' + startDate.getDate() + ' 00:00:00' + '&request.endDateTime=' + endDate.getFullYear()
      + '%2F' + endDate.getMonth() + '%2F' + endDate.getDate() + ' 00:00:00';
    if (dayly) {
      pathstring = pathstring + '&request.interval=day';
    }
    return pathstring;
  }
}
