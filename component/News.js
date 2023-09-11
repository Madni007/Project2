import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


  articles = [
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Julian Chokkattu",
      "title": "The iPhone 15 Is Finally Getting USB-C. Here’s What That Means",
      "description": "After 11 years, Apple's Lightning connector is being replaced by USB-C in the iPhone 15.",
      "url": "https://www.wired.com/story/apple-iphone-15-usb-c/",
      "urlToImage": "https://media.wired.com/photos/64fb943887a19c959aec40aa/191:100/w_1280,c_limit/The-iPhone-Is-Finally-Getting-USB-C.-Here%E2%80%99s-What-That-Means-Gear.jpg",
      "publishedAt": "2023-09-09T11:00:00Z",
      "content": "Apple is rumored to limit the base iPhone 15 models to the USB 2.0 standard, which sticks to 480 Mbps. However, the iPhone 15 Pro models may get support for the USB 3.2 or Thunderbolt 3 standard, whi… [+3056 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
      "title": "USB-C on the iPhone 15 might not be what you think",
      "description": "The E.U. common-charger mandate means that Apple will finally release an iPhone that has a USB-C port. It probably will still be as Appley as ever, though.",
      "url": "https://www.androidcentral.com/phones/apple-iphone-15-usb-c-might-not-be-what-you-think",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/Vn9jg4YrazTQ2RWpkB6zqG-1200-80.jpg",
      "publishedAt": "2023-09-09T15:00:42Z",
      "content": "It's the time of year when we get to see a new iPhone. Some folks can't wait to learn more about it, while others don't care, but it's important because of the hold Apple has over the North American … [+6522 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "andrew.myrick@futurenet.com (Andrew Myrick)",
      "title": "Beeper bringing iMessage to Android is great, but I can't help but feel nervous",
      "description": "Many have been wanting the ability to use iMessage on Android for years, but Apple hasn't budged. This opened the door for other options to fill the gap, such as Beeper which offers a whole lot more.",
      "url": "https://www.androidcentral.com/apps-software/beeper-hands-on",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/HQ7p8YEa3YvsVJhVdsKYfK-1200-80.jpg",
      "publishedAt": "2023-09-09T18:00:31Z",
      "content": "If you've followed my writing here at Android Central over the years, you likely know that I'm a dual-carry kind of person. Most of the time, my primary SIM is in whatever the latest iPhone is, but I… [+7965 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "michael.hicks@futurenet.com (Michael L Hicks)",
      "title": "VR news of the week: A Nintendo-Google partnership (?!) and more Quest 3 leaks",
      "description": "VR weekly news recap September 8, 2023: The Quest Pro 2 rises from the \"dead,\" while Nintendo allegedly develops a new mixed-reality headset with Google software.",
      "url": "https://www.androidcentral.com/gaming/virtual-reality/vr-news-of-the-week-september-9-2023",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/wnw6aQQwf5o9FEvrMpETiS-1200-80.jpg",
      "publishedAt": "2023-09-09T16:00:49Z",
      "content": "As part of a weekly series, Android Central Senior Editors Michael Hicks and Nick Sutrich are rounding up all of the news on hardware, game announcements, leaks, and cool updates related to the Meta … [+6334 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Marko Zivkovic",
      "title": "iPhone 15 and iPhone 15 Pro: Complete Weights and Dimensions",
      "description": "The iPhone 15 Pro is expected to feature a new midframe made from Grade 5 Titanium, resulting in a substantially lighter device overall. Mark Gurman recently said that the iPhone 15 Pro could be up to 10 percent lighter than the iPhone 14 Pro.\n\n\n\n\n\nMacRumors …",
      "url": "https://www.macrumors.com/2023/09/09/iphone-15-weights-and-dimensions/",
      "urlToImage": "https://images.macrumors.com/t/NuPJj3Av-wYw_h1W77gxhPMEiAQ=/1920x/article-new/2023/08/iPhone-15-Pro-Blue-Front-Perspective-Feature.jpg",
      "publishedAt": "2023-09-09T16:28:24Z",
      "content": "The iPhone 15 Pro is expected to feature a new midframe made from Grade 5 Titanium, resulting in a substantially lighter device overall. Mark Gurman recently said that the iPhone 15 Pro could be up t… [+4580 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {

    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe530688a2d148a88751b8742c4bb14apageSize20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fe530688a2d148a88751b8742c4bb14a=${this.state.page - 1}&pageSize20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.page.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fe530688a2d148a88751b8742c4bb14a==${this.state.page + 1}&pageSize20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    return (

      <div className='container my-3'>
        <h2>NewsMonkey -Top News</h2>
        <div className='row'>
          {this.state.articles.map((elem) => {
            return <div className='col-md-4' key={elem.url}>
              <NewsItem title={elem.title} description={elem.description} imgurl={elem.urlToImage} newsUrl={elem.url} />
            </div>

          })}

        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className='btn btn-dark' onClick={this.handlePrevClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
