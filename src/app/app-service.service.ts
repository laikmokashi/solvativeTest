 import { Injectable } from '@angular/core';
import { CountryDataModel, RequestCountryModel } from './app.model';
import { Axios } from 'axios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http:HttpClient) { }
  getCountryData(searchName:string , limit:number ){
    let baseurl = 'https://wft-geo-db.p.rapidapi.com';
    let url = baseurl+'searchName'
    return this.http.get(url,{
      headers: this.RequestHeader(),
    })
  }
  
  public RequestHeader(): HttpHeaders {
    const headersConfig = {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
  };
    return new HttpHeaders(headersConfig);
  }



   /* getData(countryIds:string , namePrefix:string , limit:number){
    let options = {
      method: 'GET',
      url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
      params: {countryIds: countryIds, namePrefix: namePrefix, limit:limit},
      headers: {
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
      'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
      }
      };
    this.axios.request(options).then(function (response:any) {
    console.log(response.data);
    }).catch(function (error:any) {
    console.error(error);
    }); 
  }*/
  
}
/*  */

