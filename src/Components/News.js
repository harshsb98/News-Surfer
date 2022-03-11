import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
    static defaultProps={
      country:'in',
      pageSize:6,
      category: 'general',
    }

    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }

     capitalizF = (string) =>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }

    constructor(props){
      super(props);
      this.state={
        articles: [],
        loading: true,
        page: 1,
        totalResults:0
      }
      document.title=`${this.capitalizF(this.props.category)} - News Surfer`;
    }

    async updateNews(){
      this.props.setProgress(25);
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data= await fetch(url);
      this.props.setProgress(50);
      let parsedData= await data.json();
      this.props.setProgress(75);
      this.setState({
        articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false,
      })
      this.props.setProgress(100);
    }

    async componentDidMount(){
      this.updateNews();
    }

    handlePrevClick= async ()=>{
    this.setState({page: this.state.page-1});
    this.updateNews();
    }

     handleNextClick= async ()=>{
  
     this.setState({page: this.state.page+1});
     this.updateNews();
    }

    fetchMoreData = async () => {
    this.setState({
      page: this.state.page+1
    })
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f9dff7a0ecd4d49b6e770c9ed1e23aa&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parsedData= await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
      })
    };
    


  render() {

    return (
  
      <>
        <h1 className='text-center' style={{margin:'35px 0px'}}>News Surfer - Top { 
        this.capitalizF(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}>
            <div className="container">

        <div className='row'>
        {(this.state.articles).map(
            (element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} source={element.source.name} description={element.description?element.description:""} imageUrl={!element.urlToImage?"https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg":element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt}/>
            </div>
          }
        )}
        </div>
      </div></InfiniteScroll>
     
      </>
    )
  }
}

export default News

