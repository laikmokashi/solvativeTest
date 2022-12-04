export interface CountryDataModel{
data:Data[];
links:Link[]
metadata:Metadata[]
}
export interface Link{
    href:string;
    rel:string;
}
export interface Metadata{
    currentOffset:number;
    totalCount:number;
}
export interface Data{
    city:string;
    country:string;
    countryCode:string;
    id:number;
    latitude:number;
    longitude:number;
    name:string;
    population:number;
    region:string;
    regionCode:string;
    type:string;
    wikiDataId:string;
}
export interface RequestCountryModel{
    countryIds: string;
    namePrefix: string;
    limit: number;
}

