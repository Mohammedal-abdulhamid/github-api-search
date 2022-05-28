import { React, useState } from "react";
import "./Form.css";

function Form(props) {
	const [userName, setUserName] = useState("");
	const [result, setResult] = useState([]);

	async function fetchData() {
		let languges = [];
		await fetch(`https://api.github.com/users/${userName}/repos`)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((repo) => {
					languges.push(repo.language);
				});
				setResult(languges);
			})
			.catch((error) => console.log(error));
	}
	console.log(result);

	const count = {};
	function countLanguage() {
		result.forEach(function (i) {
			count[i] = (count[i] || 0) + 1;
		});

		// convert count to an arry and sort it in ascending order
		let countArr = [];
		for (let j in count) {
			countArr.push([j, count[j]]);
		}
		// sorting countArr
		countArr.sort(function (a, b) {
			return b[1] - a[1];
		});
		let newArray = countArr.flat();
		console.log(newArray[0]);
	}

	function handelSubmit() {
		fetchData();
		setResult([]);
	}
	countLanguage();
	return (
		<div>
			<h1 className="title"> Favorite Programming Language</h1>
			<div className="form">
				<input
					className="search-bar"
					placeholder="Search GitHub User"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<button type="button" className="search-btn" onClick={handelSubmit}>
					Search
				</button>
			</div>
		</div>
	);
}

export default Form;
