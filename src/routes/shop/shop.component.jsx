import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStartAsync } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();
  //Migrating useContext to Redux
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

//Hard Coded import data for json file
// import SHOP_DATA from '../../shop.data.json';

// const Shop = () => {
//   return (
//     <div>
//       {SHOP_DATA.map(({ id, name }) => (
//         <div key={id}>
//           <h1>{name}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Shop;
