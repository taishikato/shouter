import React, {createContext} from 'react';
import firebase from 'firebase';

export const ShoutsContext = createContext();

const ShoutsContextProvider = props => {
  const addShout = text => {
    firebase
      .firestore()
      .collection('shouts')
      .add({
        text,
        createdAt: new Date(),
        picture: '',
        userid: null,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  };

  return <ShoutsContext.Provider value={{addShout}}>{props.children}</ShoutsContext.Provider>;
};

export default ShoutsContextProvider;
