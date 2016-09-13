import * as React from "react";

export interface PagerProps{
    page:number;
    totalPages:number;
    onPageClick(page:number):void;
}

interface PagerState{
    step: number;
}

export class Pager extends React.Component<PagerProps, PagerState>{
    constructor(){
        super();

        this.state = {
           step: 2
        };
    }
    
    public onPageClick(page:number){
       this.props.onPageClick(page);
    }

    private computePages(){
        let doubleStep = this.state.step * 2,
            start = Math.max(0, this.props.page - this.state.step),
            end = start + 1 + doubleStep,
            ret = new Array<number>();

        if (end > this.props.totalPages)
            end = this.props.totalPages;

        for (var i = start; i != end; ++i) {
            ret.push(i);
        }

        return ret;
    }

    private renderPageLink(page:number, text:string = ""):JSX.Element{
        text = ("" == text) ? (1+page).toString() : text;

        if(page === this.props.page)
            return <li key={text} className="active"><span>{text}</span></li>;
        return <li key={text} ><a href="#" onClick={ (e) => this.onPageClick(page) } >{text}</a></li>;
    }

    public render(){
        if(this.props.totalPages < 0)
            return;

        let pageIndexes = this.computePages(),
            count = pageIndexes.length,
            currPage = 0,
            pageLinks = new Array<JSX.Element>();

        if(this.props.page > this.state.step)
            pageLinks.push(this.renderPageLink(0, "<<"));

        for(var i=0;i!=count;++i){
            currPage = pageIndexes[i]; 
            pageLinks.push(this.renderPageLink(currPage));
        }

        if(this.props.page < this.props.totalPages - 1)
            pageLinks.push(this.renderPageLink(this.props.totalPages - 1, ">>"));

        return <nav>
            <ul className="pagination">
                {pageLinks}
            </ul>
            <span>page {this.props.page + 1} of {this.props.totalPages}</span>
        </nav>;
    }
}