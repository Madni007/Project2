import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from './Spinner';



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirLetter(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount() {
    // Fetch news when the component mounts
    this.updateNews();
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    try {
      this.props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fe530688a2d148a88751b8742c4bb14a&pageSize=${pageSize}&page=${page}`;
      // this.setState({loading: true});
      const response = await fetch(url);
      this.props.setProgress(30);
      const data = await response.json();
      this.props.setProgress(50);
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        // loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    this.props.setProgress(100);
  }

  // handlePrevClick = () => {
  //   if (this.state.page > 1) {
  //     this.setState({ page: this.state.page - 1 }, () => {
  //       this.updateNews();
  //     });
  //   }
  // } //just sse that ..k git per update hoga

  // handleNextClick = () => {
  //   if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
  //     this.setState({ page: this.state.page + 1 }, () => {
  //       this.updateNews();
  //     });
  //   }
  // }
  fetchMoreData = async() => {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fe530688a2d148a88751b8742c4bb14a&pageSize=${pageSize}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
      
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ margin: '30px 0px', marginTop: '90px'}}>
          News Monkey Top {this.capitalizeFirLetter(this.props.category)} headlines
        </h1>
        {/* {this.state.loading &&<Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}>
            <div className='container'>
        <div className='row'>
          {this.state.articles.map((elem) => (
            <div className='col-md-4' key={elem.url}>
              <NewsItem
                title={elem.title}
                description={elem.description}
                imgurl={elem.urlToImage}
                newsUrl={elem.url}
                author={elem.author}
                date={elem.publishedAt}
                source={elem.source ? elem.source.name : 'Unknown'}              />
            </div>
          ))}
        </div>
        </div>
        </InfiniteScroll>


        {/* <div className='container d-flex justify-content-between'> 
          <button
            type="button"
            disabled={this.state.page <= 1}
            className='btn btn-dark'
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            className='btn btn-dark'
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
