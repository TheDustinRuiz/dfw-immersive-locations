import React from "react";

const DfwMetroplex = ({ locations }) => {
    return (
        <div className="DfwMetroplex">
            <section>
                <div className="container">
                    <div className="cards">
                        {locations.map((location, i) => (
                            <div key={i} className="card">
                                <h3>{location.name}</h3>
                                <h5>{location.address}</h5>
                                <img src={location.imageUrl} alt={location.name} />
                                <p>{location.description}</p>
                                <a href={location.link} className="btn-1">Learn More</a>
                                <div><a href={location.yelp} className="btn-2">Yelp</a></div>
                            </div>    
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DfwMetroplex;