import {CartItemContainer, ItemDetails, CartItemImage} from "./cart-item.styles";

const CartItem = ({cartItem}) => {

    const {name, quantity, price, imageUrl} = cartItem;

    return(
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;
