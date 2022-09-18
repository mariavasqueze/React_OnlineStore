import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;
export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextContainer = styled.span`
	width: 23%;
	@media screen and (max-width: 800px) {
		width: 16%;
		font-size: 14px;
		margin-right: 12px;
	}
`;

export const PriceContainer = styled.span`
	width: 23%;
	@media screen and (max-width: 800px) {
		width: 16%;
		font-size: 14px;
		margin-left: 15px;
	}
`;

export const QuantityContainer = styled(TextContainer)`
	display: flex;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}

	@media screen and (max-width: 800px) {
		width: 20%;
		padding-left: 15px;
	}
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;

	@media screen and (max-width: 800px) {
		padding: 0px;
		margin: 5px;
	}
`;
