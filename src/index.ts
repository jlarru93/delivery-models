export interface AdminStore{
    id?:number,
    dni?:string,
    name?:string,
    phoneNumber?:string,
    zone_id?:number
}
export interface dniResponse{
    primerNombre?:string,
    segundoNombre?:string
    apellidoPaterno?:string,
    apellidoMaterno?:string
}
export interface ResponseOperation{
    type?:string;
    message?:string;
    result?:any;
}
export interface Zone{
    id?:number,
    name?:string
}
export interface Store{
    id?:number,
    adminStore_id?:number,
    name?:string,
    addressStreet?:string,
    location?:string,
    brand_id?:number,
    zone_id?:number
}
export interface Brand{
    id?:number,
    name?:string,
    zone_id?:number
}


