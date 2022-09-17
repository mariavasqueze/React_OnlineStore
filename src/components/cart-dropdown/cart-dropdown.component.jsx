import { useSelector } from "react-redux";
import { useCallback, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	// function doesn't reinitialize as long as value doesn't change (memoizing the function)
	const goToCheckoutHandler = useCallback(() => {
		navigate("/checkout");
	}, [navigate]);

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
