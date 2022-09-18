import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding-left: 10px;

	.logo {
		max-height: 100px;
		max-width: 65px;
		padding-bottom: 25px;
	}

	@media screen and (max-width: 800px) {
		width: 50px;


		.logo {
			max-width: 55px;
			padding-bottom: 50px;
		}
	}
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		margin-top: 5px;
		width: 80%;
	}
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
