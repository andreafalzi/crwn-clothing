import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
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
