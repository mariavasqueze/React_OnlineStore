import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		img {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;
		margin-bottom: 20px;
		&:hover {
			.image {
				opacity: unset;
			}
			button {
				opacity: unset;
			}
		}
	}
`;

export const AddButton = styled(Button)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
	@media screen and (max-width: 800px) {
		display: block;
		opacity: 0.9;
		min-width: unset;
		padding: 0 10px;
		font-size: 12px;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NameContainer = styled.span`
	width: 80%;
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	width: 20%;
	text-align: right;
`;
