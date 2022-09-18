import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const categories = [
	{
		id: 1,
		title: "hats",
		imageUrl: "https://i.ibb.co/LZ81mJc/hats.jpg",
		// imageUrl: "https://i.ibb.co/dtGkqLB/B00-3918.jpg",
		route: "/shop/hats",
	},
	{
		id: 2,
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		route: "/shop/jackets",
	},
	{
		id: 3,
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		route: "/shop/sneakers",
	},
	{
		id: 4,
		title: "womens",
		imageUrl: "https://i.ibb.co/n7xQK6x/women.jpg",
		route: "/shop/womens",
	},
	{
		id: 5,
		title: "mens",
		imageUrl: "https://i.ibb.co/VV5tHng/man.jpg",
		route: "/shop/mens",
	},
];

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => {
				return <DirectoryItem key={category.id} category={category} />;
			})}
		</DirectoryContainer>
	);
};

export default Directory;
