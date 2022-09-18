import { useDispatch, useSelector } from "react-redux";

import {
	selectCartItems,
} from "../../store/cart/cart.selector";
import {
	removeItemFromCart,
	clearItemFromCart,
	addItemToCart,
} from "../../store/cart/cart.action";

import {CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer, PriceContainer} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const clearItemHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<TextContainer> {name} </TextContainer>
			<QuantityContainer>
				<div className="arrow" onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addItemHandler}>
					&#10095;
				</div>
			</QuantityContainer>
			<PriceContainer>{price}</PriceContainer>
			<RemoveButtonContainer onClick={clearItemHandler}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
