export class Product{
    constructor(private _id:string, private _title:string){}

    public get id():string{return this._id;}
    public get title():string{return this._title;}
}