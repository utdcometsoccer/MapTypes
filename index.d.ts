// Type definitions for MapTypes
// Project: MapTypes
// Definitions by: Idaho Edokpayi http://whoisidaho.com 


export interface IPoint {
    Latitude:number;
    Longitude: number;
}

export interface IAddress{
    StreetAddress:string;
    City:string;
    StateProvince:string;
    PostalCode:string;
    toString():string;
}
export interface IMapClick{
    (Location:IPoint):void
}

declare namespace JSX{
    interface Element {}
}

export interface IMapService {
    AutoSuggest(Query: string): string[];
    GeoCode(Address:string):IPoint[];
    ReverseGeoCode(Point:IPoint):string[];
    Map(Center:IPoint,ClickHandler:IMapClick):JSX.Element;
}
