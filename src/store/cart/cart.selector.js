import { createSelector } from "reselect";

// take slice of state
const selectCartReducer = (state) => state.cart;

// get cart items from state slice
export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

// returns total value of all items
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

// output new cart total
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity * cartItem.price,
		0
	)
);
