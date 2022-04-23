import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CoinList } from "../config/api";
import { CryptoState } from "../CryptoContext";

const CoinsTable = () => {
	const { currency, symbol } = CryptoState();

	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	const history = useHistory();

	const fetchCoins = async () => {
		setLoading(true);
		const { data } = await axios.get(CoinList(currency));

		setCoins(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
	}, [currency]);

	console.log(coins);

	const handleSearch = () => {
		return coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(search) ||
				coin.symbol.toLowerCase().includes(search)
		);
	};

	return (
		<div className='flex flex-col container mx-auto items-center mt-4 space-y-4'>
			<h2 className='text-3xl font-thin'>
				Cryptocurrency Prices by Market Cap
			</h2>
			{/* Search */}
			<input
				className='w-[90%] bg-darkGray text-white border p-3 text-lg border-gray-500 outline-none rounded focus:border-white'
				type='text'
				placeholder='Search for a cryptocurrency...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<table className='table-fixed w-[90%]'>
				<thead className=''>
					<tr className='bg-gold text-black'>
						<th className='w-[25%] text-center p-3 rounded-l text-sm md:text-base'>
							Coin
						</th>
						<th className='w-[25%] text-center p-3 text-sm md:text-base'>
							Price
						</th>
						<th className='w-[25%] text-center p-3 text-sm md:text-base'>
							24 Hrs Change
						</th>
						<th className='w-[25%] text-center p-3 rounded-r text-sm md:text-base'>
							Market Cap
						</th>
					</tr>
				</thead>
				<tbody>
					{handleSearch().map((row) => {
						const profit = row.price_change_percentage_24h > 0;
						return (
							<tr
								className='cursor-pointer hover:bg-gray-800'
								key={row.id}
								onClick={() => history.push(`/coins/${row.id}`)}
							>
								<td className='w-[25%] p-3 rounded-l'>
									<div className='flex items-center space-x-2'>
										<img className='w-10 md:w-14' src={row.image} alt='logo' />
										<div className='flex flex-col space-y-1'>
											<p className='text-sm md:text-2xl'>
												{row.symbol.toUpperCase()}
											</p>
											<p className='text-sm text-gray-100 hidden md:block'>
												{row.name}
											</p>
										</div>
									</div>
								</td>
								<td className='w-[25%] text-center p-3 text-sm md:text-base'>
									{symbol}
									{row.current_price.toLocaleString("en-IN")}
								</td>
								<td className='w-[25%] text-center p-3 text-sm md:text-base'>
									<p className={profit ? "text-green-600" : "text-red-600"}>
										{profit && "+"}
										{row.price_change_percentage_24h.toFixed(2)}
									</p>
								</td>
								<td className='w-[25%] text-center p-3 rounded-r text-sm md:text-base'>
									{symbol}
									{parseInt(
										row.total_volume.toString().slice(0, -6)
									).toLocaleString("en-IN")}
									M
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CoinsTable;
