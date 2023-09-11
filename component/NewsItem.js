import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description ,imgurl,newsUrl} = this.props;
    return (
      <div className='container mt-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src= {!imgurl?"https://www.presse-citron.net/app/uploads/2023/09/godzilla-Monarch.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
    
  }
}

export default NewsItem
