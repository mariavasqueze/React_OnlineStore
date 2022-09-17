import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
    justify-items: center;
	}
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;