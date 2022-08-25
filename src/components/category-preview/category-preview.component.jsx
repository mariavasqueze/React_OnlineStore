import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import "./category-preview.styles.scss";

//component to show just 4 products on main shop page

const CategoryPreview = ({title, products}) => {
	return (
        <div className="category-preview-container">
            <h2><Link className='title' to={title}>
          {title.toUpperCase()}
        </Link></h2>
            <div className="preview">
                {/* filter by index of products to just show 4, then map and show each product card */}
                {
                    products
                    .filter((_, index) => index < 4)
                    .map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
};

export default CategoryPreview;
