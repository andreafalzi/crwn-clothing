import { createContext, useState, useEffect } from 'react';

// function to SET Collections and documents from FIREBASE
// import { addCollectionAndDocuments } from '../utilities/firebase/firebase.utilities.js';

// function to GET Collections and documents from FIREBASE
import { getCategoriesAndDocuments } from '../utilities/firebase/firebase.utilities';

// static file where datas were imported
// import SHOP_DATA from '../shop.data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //this useEffect is only used once to create collections and documents inside FIREBASE DB fram a static file such shop.data.js
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  //Migrating useContext to Redux
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategoriesMap(categoryMap);
  //   };
  //   getCategoriesMap();
  // }, []);

  const value = { categoriesMap };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
