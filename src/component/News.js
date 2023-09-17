//   import React, { Component } from 'react';
//   import NewsItem from './NewsItem';
// import PropTypes from 'prop-types';
 
// export class News extends Component {
       
//   static defaultProps ={
//     country :'in',
//     pageSize: 6,
//     category:'general',
//   };
//   static propTypes ={
//     country : PropTypes.string,
//     category: PropTypes.string,
//     pageSize: PropTypes.number,
//   };


//   constructor() {
//     super();
//     this.state = {
//       articles: [], // Initialize articles as an empty array
//       totalResults: 0, // Initialize totalResults
//       loading: false,
//       page: 1
//     };
//   }
//   async updateNews() {
    
// const { country, category, pageSize } = this.props;
// const { page } = this.state;
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe530688a2d148a88751b8742c4bb14a&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
//   }
//   async componentDidMount() {
//           this.updateNews();
//   }

//   // handlePrevClick = () => {
//   //   if (this.state.page > 1) {
//   //     this.setState({ page: this.state.page - 1 }, () => {
//   //       this.updateNews();
//   //     });
//   //   }
//   // }
  
//   // handleNextClick = () => {
//   //   if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//   //     this.setState({ page: this.state.page + 1 }, () => {
//   //       this.updateNews();
//   //     });
//   //   }
//   // }
//   handlePrevClick = () => {
//     if (this.state.page > 1) {
//       const newPage = this.state.page - 1;
//       this.setState({ page: newPage }, () => {
//         this.updateNews(newPage); // Pass the updated page number to updateNews
//       });
//     }
//   }
  
//   handleNextClick = async () => {
//     if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//       const nextPage = this.state.page + 1;
//       await this.setState({ page: nextPage }); // Update the page first
//       this.updateNews(); // Fetch news for the next page
//     }
//   }
  
//   // handleNextClick = () => {
//   //   if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
//   //     const newPage = this.state.page + 1;
//   //     this.setState({ page: newPage }, () => {
//   //       this.updateNews(newPage); // Pass the updated page number to updateNews
//   //     });
//   //   }
//   // }
    
 

//   render() {
//     return (
//       <div className='container my-3'>
//         <h1 className='text-center' style={{margin: '30px 0px'}}>News Monkey Top headlines</h1>
//         <div className='row'>
//           {this.state.articles.map((elem) => (  // I use () with map() intead of privious {} 
//             <div className='col-md-4' key1={elem.url}>
//               <NewsItem title={elem.title} description={elem.description} imgurl={elem.urlToImage} newsUrl={elem.url} author ={elem.author} date ={elem.publishedAt} source={elem.source.name}/>
//             </div>
//   ))}
//         </div>
//         <div className='container d-flex justify-content-between'>
//           <button type="button" disabled={this.state.page<=1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
//           <button type="button" disabled={this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
//         </div>
//       </div>
//     )  
// }
// }
//  export default News

 import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    // Fetch news when the component mounts
    this.updateNews();
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fe530688a2d148a88751b8742c4bb14a&pageSize=${pageSize}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () => {
        this.updateNews();
      });
    }
  }

  handleNextClick = () => {
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.updateNews();
      });
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ margin: '30px 0px' }}>
          News Monkey Top headlines
        </h1>
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
                source={elem.source.name}
              />
            </div>
          ))}
        </div>
        <div className='container d-flex justify-content-between'>
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
        </div>
      </div>
    );
  }
}

export default News;
