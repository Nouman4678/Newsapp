import React from 'react'

const Newsitem = (props) => {
   
    let {title, description, imgUrl, url, Author, date,source} = props;
    return (
        <div className="card mx-4">
        <img src={imgUrl?imgUrl:"https://www.reuters.com/resizer/QdfcGkJ-nCMs1xOQvelihRzGmlA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N4W36ZRN4FISVHYBMN4VEMBQ7E.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body text-center">
          <h5 className="card-title">{title} <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"90%" ,zIndex: 1}}>{source}</span></h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {!Author?"unknown":Author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
    }

export default Newsitem
