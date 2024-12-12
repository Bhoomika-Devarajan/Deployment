// BeachProperties.js
import React, { useState, useEffect } from 'react';
import { request } from '../../util/fetchAPI';
import PropertyCard from './PropertyCard'; // Assume you have a PropertyCard component for individual properties

const BeachProperties = () => {
  const [beachProperties, setBeachProperties] = useState([]);

  useEffect(() => {
    const fetchBeachProperties = async () => {
      try {
        const data = await request('/property/find?type=beach', 'GET');
        setBeachProperties(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeachProperties();
  }, []);

  return (
    <div>
      <h2>Beach Properties</h2>
      <div>
        {beachProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default BeachProperties;
