import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description ,imgurl,newsUrl,source} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" >
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left :'90%',zIndex:'1'}}>{source} </span>
          <img src= {!imgurl?"https://www.presse-citron.net/app/uploads/2023/09/godzilla-Monarch.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-info">Read More</a>
          </div>
        </div>
      </div>
    )
    
  }
}

export default NewsItem
