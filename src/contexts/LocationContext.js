import React, {useState, createContext} from 'react';

export const LocationContext = createContext();

const LocationContextProvider = props => {
  const locStorage = localStorage.getItem('locationValue');
  const [currLocation, setCurrLocation] = useState(locStorage ? locStorage : '/timeline');

  const setLocation = loc => {
    setCurrLocation(loc);
    localStorage.setItem('locationValue', loc);
  };

  return <LocationContext.Provider value={{setLocation, currLocation}}>{props.children}</LocationContext.Provider>;
};

export default LocationContextProvider;
