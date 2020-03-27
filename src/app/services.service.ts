import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cases, Convert } from '@app/models/cases';
import { ConvertWorldTotal, WorldTotal } from '@app/models/worldTotal';
import { ConvertCountryDetail, CountryDetail } from '@app/models/countryDetail';

import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  async getCases(): Promise<Cases> {
    return new Promise(async (resolve, reject) => {
      const response = await this.http.get(`${this.baseUrl}cases`).toPromise();
      const cases = Convert.toCases(JSON.stringify(response));
      resolve(cases);
    });
  }

  async getWorldTotalStatus(): Promise<WorldTotal> {
    return new Promise(async (resolve, reject) => {
      const response = await this.http.get(`${this.baseUrl}getWorldTotalStatus`).toPromise();
      const worldTotal = ConvertWorldTotal.toWorldTotal(JSON.stringify(response));
      resolve(worldTotal);
    });
  }

  async getHistoryByParticularCountry(country: string): Promise<CountryDetail> {
    return new Promise(async (resolve, reject) => {
      const response = await this.http.get(`${this.baseUrl}getHistoryByParticularCountry/${country}`).toPromise();
      const countryDetail = ConvertCountryDetail.toCountryDetail(JSON.stringify(response));
      resolve(countryDetail);
    });
  }
}
