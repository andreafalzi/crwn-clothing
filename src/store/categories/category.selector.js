import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

//createSelector is a Redux func that allow us to have chaching to avoid re-rendering when data does not change
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

//old version w/o caching or memoizing
// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
