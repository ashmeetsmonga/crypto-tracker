import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const Header = () => {
	const history = useHistory();

	const { currency, setCurrency } = CryptoState();
	console.log(currency);
	return (
		<div className='container p-4 bg-transparent static mx-auto flex justify-between'>
			<h2
				className='text-2xl font-bold text-gold cursor-pointer'
				onClick={() => history.push("/")}
			>
				CryptoTracker
			</h2>
			<select
				className='bg-gray-800 outline-none'
				value={currency}
				onChange={(e) => setCurrency(e.target.value)}
			>
				<option value='INR'>INR</option>
				<option value='USD'>USD</option>
			</select>
		</div>
	);
};

export default Header;
