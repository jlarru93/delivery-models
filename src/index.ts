export interface AdminStore{
    id?:number,
    dni?:string,
    name?:string,
    phoneNumber?:string,
    zone_id?:number
}

export interface Product{
    id?:number,
    name?:string,
    picture ?:string,
    snap ?: string,
    review ?: string,
    status ?: string
}

export interface ProductRequest{
    dataProduct ?: Product,
    option      ?: Option[],
    currency    ?: string,
    stores      ?:  []
}

export interface Option{
    id ?: number,
    product_id ?: number,
    name        ?: string,
    control     ?: string,
    subOption  ?: SubOption[]
}
export interface SubOption{
    id ?: number,
    name ?: string,
    currency ?: string
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
    name?:string,
    polygon?:string;
    
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
export interface AdminZone{
    id?:string;
    name?:string;
    dni?:string;
    phoneNumber?:string;
}
export interface dniRequest{
    primerNombre?:string,
    segundoNombre?:string
    apellidoPaterno?:string,
    apellidoMaterno?:string
}

export interface SendSMS{
    code?: string,
    phone_number ?: string
}

export interface Position{
    lat:string,
    lng:string
}
export interface User{
    phoneNumber:string,
    name?:string,
    email?:string
}
export interface ReniecDto{
    primerNombre?:string,
    segundoNombre?:string,
    apellidoPaterno?:string,
    apellidoMaterno?:string
}