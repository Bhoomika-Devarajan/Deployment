import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './featuredProperties.module.css';
import { request } from '../../util/fetchAPI';
import img from '../../assets/estate3.jpg';
import person from '../../assets/person.jpg';
import { FaBed, FaSquareFull } from 'react-icons/fa';

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const data = await request('/property/find/featured', 'GET');
        console.log(data);
        setFeaturedProperties(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Properties you may like</h5>
          <h2>Our Featured Properties</h2>
        </div>
        <div className={classes.featuredProperties}>
          {featuredProperties?.map((property) => (
            <div key={property._id} className={classes.featuredProperty}>
              <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
                <img 
                  src={property.img ? `http://localhost:2000/images/${property.img}` : img} 
                  alt="Property" 
                  onError={(e) => { e.target.onerror = null; e.target.src = `${property?.img}`; }} // Fallback to default image on error
                />
              </Link>
              <div className={classes.details}>
                <div className={classes.priceAndOwner}>
                  <span className={classes.price}>${property?.price}</span>
                  <img 
                    src={property?.currentOwner?.profileImg ? `http://localhost:2000/images/${property.currentOwner.profileImg}` : person} 
                    className={classes.owner} 
                    alt="Owner" 
                    onError={(e) => { e.target.onerror = null; e.target.src = person; }} // Fallback to default image on error
                  />
                </div>
                <div className={classes.moreDetails}>
                  <span>{property?.beds} beds <FaBed className={classes.icon} /></span>
                  <span>{property?.sqmeters} square meters <FaSquareFull className={classes.icon} /></span>
                </div>
                <div className={classes.desc}>
                  {property?.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
