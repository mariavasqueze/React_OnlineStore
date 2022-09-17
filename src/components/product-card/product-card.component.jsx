import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
	ProductCardContainer,
	BackgroundImage,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer,
	AddButton,
} from "./product-card";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to Cart
			</AddButton>
		</ProductCardContainer>
	);
};

export default ProductCard;
