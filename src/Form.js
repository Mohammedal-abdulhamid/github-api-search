import {React, useState} from 'react'
import "./Form.css";
// async function fetchData() {
// 	let result = [];
// 	await fetch(`https://api.github.com/users/${userName}/repos`)
// 		.then((res) => res.json())
// 		.then((data) => (result = [...data]))
// 		.catch((error) => console.log(error));
// 	let languages = [];
// 	for (let repo of result) {
// 		languages.push(repo.language);
// 	}
// 	let new_arr = [];

// 	languages.reduce(function (r, current_item) {
// 		if (current_item !== r) {
// 			new_arr.push([]);
// 		}
// 		new_arr[new_arr.length - 1].push(current_item);
// 		return current_item;
// 	}, undefined);
// 	console.log("new array>>>>>>>>>", new_arr);
// }
// console.log(userName);
// function handelSubmit(e) {
// 	e.preventDefault();
// }
// fetchData(); 
function Form() {
	const [userName, setUserName] = useState("");

	let result = [];
	 function fetchData() {
		 fetch(`https://api.github.com/users/${userName}/repos`)
			.then((res) => res.json())
			.then((data) =>
			  console.log(data)
			)
			.catch((error) => console.log(error));
	}
	

	
	
	function handelSubmit(e) {
		e.preventDefault();
	}
	fetchData();

	return (
		<div>
			<h1 className="title"> Favorite Programming Language</h1>
			<div className="form">
				<input
					className="search-bar"
					placeholder="Search GitHub User"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button
					type="submit"
					className="search-btn"
					onSubmit={(e) => handelSubmit(e)}
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default Form;