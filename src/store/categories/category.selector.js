import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
	return state.categories;
};

export const selectCategories = createSelector(
	//imput selector - what I need to get to produce something else
	[selectCategoryReducer],
	// output, only runs if input is different
	(categoriesSlice) => {
		return categoriesSlice.categories;
	}
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	//as long as categories array doesn't change, don't rerun method - show prev value
	(categories) => {
		return categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	}
);

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
)
