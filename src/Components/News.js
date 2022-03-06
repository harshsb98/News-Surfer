import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   articles= [
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Factbox: Harsh words, tough action: how companies have rebuffed Russia - Reuters",
        "description": "Corporate actions to censure Russia after its invasion of Ukraine vary widely and include some measures required by law and some voluntary, with comments ranging from harsh condemnations to more measured promises to review business in the country.",
        "url": "https://www.reuters.com/business/harsh-words-tough-action-how-companies-have-rebuffed-russia-2022-03-04/",
        "urlToImage": "https://www.reuters.com/resizer/o9PnQWTn8k8AyrRk7-4-adSpHJY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WGS3Y7K3BJJMZODWL4RAWL7SVU.jpg",
        "publishedAt": "2022-03-04T01:52:00Z",
        "content": "March 3 (Reuters) - Corporate actions to censure Russia after its invasion of Ukraine vary widely and include some measures required by law and some voluntary, with comments ranging from harsh condem… [+3528 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Android Central"
        },
        "author": "jayar.decenella@gmail.com (Jay Bonggolto)",
        "title": "Russia's declining smartphone market may slip further in 2022 amid Ukraine invasion",
        "description": "It fell 7% year over year in 2021",
        "url": "https://www.androidcentral.com/russia-smartphone-market-potential-decline-amid-ukraine-invasion",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/tHyLc5eaEaBt9sTgL9Rg7U-1200-80.jpg",
        "publishedAt": "2022-03-04T00:53:09Z",
        "content": "<ul><li>Russia's smartphone market declined 7% year over year in 2021, according to Counterpoint Research.</li><li>Samsung dominated the market with a 30% share, followed by Xiaomi, Apple, and other … [+2183 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "insider@insider.com (Lina Batarags)",
        "title": "Airbnb is suspending operations in Russia and Belarus, CEO Brian Chesky announces",
        "description": "Airbnb joins the likes of Apple, General Motors, Ikea, and Shell in pulling out of or suspending operations in Russia.",
        "url": "https://www.businessinsider.com/airbnb-suspends-operations-russia-belarus-brian-chesky-2022-3",
        "urlToImage": "https://i.insider.com/6221972204579d001893f663?width=1200&format=jpeg",
        "publishedAt": "2022-03-04T05:11:20Z",
        "content": "Airbnb is suspending operations in Russia and Belarus.\r\nAirbnb CEO Brian Chesky, whose verified Twitter account currently displays an icon of the blue-and-yellow Ukrainian flag, made the announcement… [+1151 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entrepreneur"
        },
        "author": "Portia Antonia Alexis",
        "title": "Luxury Brands Are Attempting to Participate in the Metaverse",
        "description": "The promising financial and advertising value in the metaverse has brands jumping into the game.",
        "url": "https://www.entrepreneur.com/article/416779",
        "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1646355263-GettyImages-836410284.jpg",
        "publishedAt": "2022-03-04T01:00:00Z",
        "content": "It's not surprising how the word metaverse finds its way into newer technological discourses. We have heard top CEOs such as Mark Zuckerberg and Satya Nadella talk about it. Whether you are a vetted … [+6793 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "heise online"
        },
        "author": "Ronald Eikenberg",
        "title": "Achtung, Handy hört mit: Smartphone-Apps als Wanze",
        "description": "Lauschen Smartphones permanent mit und geben Gesprächsinhalte dann an Facebook, Google & Co. weiter? Ein Team des Bayerischen Rundfunks hat es ausprobiert.",
        "url": "https://www.heise.de/news/Achtung-Handy-hoert-mit-Smartphone-Apps-als-Wanze-6517559.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/3/4/2/5/8/2/Darknet-a9da6726ef20c73b.jpg",
        "publishedAt": "2022-03-04T06:00:00Z",
        "content": "Kaffeepause: Sie unterhalten sich mit einem Kollegen über ein bestimmtes Thema und kurz darauf erscheinen bei Facebook, Google oder Instagram Werbeanzeigen, die erstaunlich gut dazu passen. Bei ct me… [+9287 chars]"
    }]

    constructor(){
      super();
      this.state={
        articles: this.articles,
        loading: false
      }
    }

  render() {

    return (
      <div className="container my-3">
        <h2>News Surfer - Top Headlines</h2>
      <div className='row'>
       {(this.state.articles).map(
          (element) => {
          return <div className="col-md-4" key={element.url}>
          <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        }
      )}
      </div></div>
    )
  }
}

export default News

