import React from 'react'
import '../style.css'
const NewsIteam = (props) => {
        let { title, description, imageUrl, newsUrl, author, date,source } = props;
        return (
            <div>
                <div className="card my-3" style={{ width:'21rem'}}>
                    <img src={!imageUrl ? "https://image.shutterstock.com/image-photo/close-human-hands-using-virtual-260nw-349400798.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div>
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
                        </div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-success">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target='blank' className="btn btn-sm " style={{backgroundColor:'rgb(110 100 96)',color:'white'}}>Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsIteam;
