import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem = (props) => {
    let { title, description, urlToImage, newsUrl, author, date, source, mode } = props;
    return (
        <div className="col-md-4 g-1" >
            {(title && description) &&
                <div className="card border-dark mb-3" style={{ background: mode === true ? 'black' : 'white', color: mode === true ? 'white' : 'black' }}>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger red-message"> {source} </span>
                    <img src={urlToImage ? urlToImage : 'https://rb.gy/g6mih1'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" ><q>{title}</q></h5>
                        <p className="card-text p-1">{description}</p>
                        <p className="card-text"><small className={`text-body-${mode === true ? 'light' : 'secondary'}`}>By <b>{author}</b> on <b>{new Date(date).toUTCString()}</b></small></p>
                        <Link to={newsUrl} target='blank' className="btn btn-sm btn-secondary">Read More</Link>                      
                    </div>
                </div>
            }
        </div>
    )
}
export default NewsItem
