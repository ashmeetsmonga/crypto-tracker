import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
	return (
		<div
			className={`p-3 border border-gold rounded cursor-pointer ${
				selected && "bg-gold text-black font-bold"
			}`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default SelectButton;
