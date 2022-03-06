import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
      super();
      this.state={
        articles: [],
        loading: false
      }
    }

    async componentDidMount(){
      let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa";
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({articles: parsedData.articles})
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
      </div></div>
    )
  }
}

export default News

