import React, { useState, createContext } from 'react';

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
    let locStorage = localStorage.getItem("locationValue");
    const [currLocation, setCurrLocation] = useState((locStorage) ? locStorage : '/timeline');

    const getLocation = (loc) => {
        setCurrLocation(loc)
        localStorage.setItem("locationValue", loc);
    }

    return (
        <LocationContext.Provider value={{ getLocation, currLocation }}>
            {props.children}
        </LocationContext.Provider>
    )
}

export default LocationContextProvider;