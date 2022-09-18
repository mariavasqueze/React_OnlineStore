import styled from "styled-components";

export const SignIngContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	h2 {
		margin: 10px 0;
	}

	@media screen and (max-width: 800px) {
        width: 100%;
		font-size: 16px;
		margin-bottom: 40px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
