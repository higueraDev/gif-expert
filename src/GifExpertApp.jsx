import { useState } from "react";
import { AddCategory, GifList } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		if (!categories.includes(newCategory))
			setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory onAddCategory={onAddCategory} />
			{categories.map((category) => (
				<GifList category={category} key={crypto.randomUUID()} />
			))}
		</>
	);
};
