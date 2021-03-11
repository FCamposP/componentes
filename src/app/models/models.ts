export class Card{
    constructor(
        public id:string,public srcFile:string, public tittle:string,
        public creator:string,public otherApp:string,public description:string, 
        public cantResena:string,public subdescription:string,public href:string
    ){}
}
export class CardCool{
    constructor(
        public heading?:string,
        public category?:string,
        public hrefCategory?:string,
        public hrefReviews?:string,
        public hrefDetail?:string,
        public hrefProveedor?:string,
        public imgsvg?:string,
        public description?:string
    ){}
}


export class CarGood{
    constructor(
    public title?:string,
    public srcImage?:string,
    public market?:string,
    public reviews?:string,
    public description?:string,
    public href?:string){}
}

export class Descuento{
    constructor(
        public header?:string,
        public precioDescuento?:string,
        public precioOriginal?:string,
        public promocion?:string,
        public msjBtn?:string,
        public descripcion?:string,
        public urlAction?:string

    ){}
}

export class Motivador2{
    constructor(
        public title?:string,
        public precio?:string,
        public img?:string,
        public urlCertificado?:string,
        public moneda?:string
    ){}
}

export class Motivador2Item{
    constructor(
        public title?:string,
        public description?:string,
        public icon?:string
    ){}
}