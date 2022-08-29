import ProductCard from "../product-card/product-card.component";

import {
	CategoryPreviewContainer,
	Title,
	Preview,
} from "./category-preview.styles";

//component to show just 4 products on main shop page

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{/* filter by index of products to just show 4, then map and show each product card */}
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
