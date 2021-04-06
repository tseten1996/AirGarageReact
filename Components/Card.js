import React from 'react';

export default function Card(props) {
    const { business } = props;

    const starStyle = {
        width: business.rating * 20 + "%"
    }

    const cardStyle = {
        margin: "0px 10px"
    }

    return (
        <a href={business.url}>
        <div className="card" style={cardStyle}>
            <div className="card-image">
                <figure className="image is-square">
                    <img src={business.image_url ? business.image_url : "/default-pic.jpeg"} alt={business.name} />
                </figure>
            </div>
            <div className="card-content mb-5">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{business.name}</p>
                        <p className="subtitle is-6">{business.location.display_address.join()}</p>
                        <div className="rating">
                            <div className="rating-upper" style={starStyle}>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <div className="rating-lower">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </div>
                        <p className="subtitle is-6">{business.rating} Stars</p>
                        <p className="subtitle is-6">{business.review_count} Reviews</p>
                        <p className="subtitle-is-6">Parking Score : {Math.round(100*(business.review_count * business.rating)/(business.review_count  + 1 ))/100} </p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
}