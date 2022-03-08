import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

    constructor(){
      super();
      this.state={
        articles: [],
        loading: false,
        page: 1
      }
    }

    async componentDidMount(){
      let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa&page=1&pageSize=20";
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({articles: parsedData.articles,
        totalResults:parsedData.totalResults
      })
    }

    handlePrevClick= async ()=>{
      let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa&page=${this.state.page-1}&pageSize=20`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({})
      
      this.setState({    
        page: this.state.page-1,    
        articles: parsedData.articles    
      })
    }

     handleNextClick= async ()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/20))
      {}
      else{
        let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa&page=${this.state.page+1}&pageSize=20`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({})
         
        this.setState({    
          page: this.state.page+1,    
          articles: parsedData.articles    
        })}
    }


  render() {

    return (
      <div className="container my-3">
        <h1>News Surfer - Top Headlines</h1>
      <div className='row'>
       {(this.state.articles).map(
          (element) => {
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={!element.urlToImage?"https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg":element.urlToImage} newsUrl={element.url}/>
          </div>
        }
      )}
      </div>
      <div className="container d-flex justify-content-between">

      <button type="button" disabled={this.state.page<=1} className="btn btn-dark btn-lg" onClick={this.handlePrevClick}>

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-left" viewBox="0 0 18 18">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>&nbsp;

         Previous</button>

      <button type="button" className="btn btn-dark btn-lg" onClick={this.handleNextClick}>
        Next&nbsp;

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 18 18">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>
      </button>
      </div>
      </div>
    )
  }
}

export default News

