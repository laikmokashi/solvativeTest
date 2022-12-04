import { Component } from '@angular/core';
import { AppService } from './app-service.service';
import { CountryDataModel, Link , Data} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstLink:string;
  nextLink:string;
  lastLink:string;
  serviceData:CountryDataModel
  limit:number=3;
  links :Link[];
  countryData:Data[];
  data1:any
  searchingName:any;
  tableColumn =['#','Place Name','Country']; 
  constructor(public dataService:AppService){
     
  }

  dataSet(Searchstr=""){
    this.data1 = this.dataService.getCountryData(Searchstr,this.limit).subscribe((res:CountryDataModel)=>{
      this.serviceData = res;
      this.countryData = res.data;
      this.links = res.links
      console.log(res);
      this.setupLinks()
     }); 
  }
  setupLinks(){
    for(let link of this.links){
      if(link.rel == 'first'){
      this.firstLink = link.href
      }else if(link.rel == 'last'){
        this.lastLink = link.href
      }else if(link.rel == 'next'){
        this.nextLink = link.href
      }

    }
  }

  pagination(linkName:string){
    if(linkName = 'first'){
      this.dataSet(this.firstLink)
    }else if(linkName='next'){
      this.dataSet(this.nextLink)
    }else if(linkName='last'){
      this.dataSet(this.lastLink)
    }
  }

  searchCountry(){
    console.log(this.searchingName)
    if(Number.isNaN(this.searchingName)){
      this.dataSet('/v1/geo/cities?namePrefix='+this.searchingName)
    }else{
      this.dataSet('/v1/geo/cities?countryIds='+this.searchingName)
    }
  }
}
