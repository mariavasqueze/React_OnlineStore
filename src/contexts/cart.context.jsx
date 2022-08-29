import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
	//find if cartitems contains productToAdd // ind function returns boolean, if matches == true
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	// if found (true), increement quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// return new array with modified cartItems / new cart Item
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	//check if quantity is equal to 1, if it is remove item from cart
	if (existingCartItem.quantity === 1) {
		//take out everything that equals true (or keep everything that equals false)
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	// return back cart items with matching cart item with reduced quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//value you want to access
export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

//change functionality to using Reducer
const CART_ACTION_TYPES = {
	SET_CART_ITEMS: "SET_CART_ITEMS",
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};

		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
};

//provider - component
export const CartProvider = ({ children }) => {
	// const [isCartOpen, setIsCartOpen] = useState(false);
	// const [cartItems, setCartItems] = useState([]);
	// const [cartCount, setCartCount] = useState(0);
	// const [cartTotal, setCartTotal] = useState(0);

	// useEffect(() => {
	// 	const newCartCount = cartItems.reduce(
	// 		(total, cartItem) => total + cartItem.quantity,
	// 		0
	// 	);
	// 	setCartCount(newCartCount);
	// }, [cartItems]);

	// useEffect(() => {
	// 	const newCartTotal = cartItems.reduce(
	// 		(total, cartItem) => total + cartItem.quantity * cartItem.price,
	// 		0
	// 	);
	// 	setCartTotal(newCartTotal);
	// }, [cartItems]);

	//using reducer
	const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const updateCartItems = (newCartItems) => {
		//generateNewCartCount
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		//generate newCartTotal
		const newCartTotal = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		//dispatch new action with payload with new cartitems, newCartTotal, newCartCount
		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			})
		);
	};

	const addItemToCart = (product) => {
		const newCartItems = addCartItem(cartItems, product);
		updateCartItems(newCartItems);
	};

	const removeItemFromCart = (cartItemToRemove) => {
		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
		updateCartItems(newCartItems);
	};

	const clearItemFromCart = (cartItemToClear) => {
		const newCartItems = clearCartItem(cartItems, cartItemToClear);
		updateCartItems(newCartItems);
	};

	const setIsCartOpen = (bool) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
		removeItemFromCart,
		clearItemFromCart,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
