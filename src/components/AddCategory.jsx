import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddCategory }) => {
	const [inputvalue, setInputValue] = useState("");
	const onInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};
	const onFormSubmit = (e) => {
		e.preventDefault();
		const cleanValue = inputvalue.trim();
		if (!cleanValue) return;
		onAddCategory(cleanValue);
	};
	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Search Gifs"
				value={inputvalue}
				onChange={onInputChange}
			></input>
		</form>
	);
};
