import React from 'react';

const Country = ({country}) => {
    console.log(country.name.common);
    return (
        <div>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;