export class PagedCollection<T>{
    constructor(private _items:Array<T>, private _page:number, 
                private _totalPagesCount:number, private _totalItemsCount:number){}

    public get items():Array<T>{return this._items;}
    public get page():number{return this._page;}
    public get totalPagesCount():number{return this._totalPagesCount;}
    public get totalItemsCount():number{return this._totalItemsCount;}
}