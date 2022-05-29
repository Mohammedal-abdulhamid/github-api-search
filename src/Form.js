import { React, useState } from "react";
import "./Form.css";
import CSS from "./images/CSS.png";
import JavaScript from "./images/JavaScript.png";
import HTML from "./images/HTML.png";
import Java from "./images/Java.jpg";
import PHP from "./images/PHP.jpg";
import Python from "./images/Python.jpg";
import C from "./images/C.png";
import CPlus2 from "./images/C++.png";
import CSharp from "./images/C#.png";
import Ruby from "./images/Ruby.jpg";
import Swift from "./images/Swift.jpg";
import Elixir from "./images/Elixir.jpg";

function Form() {
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
	let newArray;
	function countLanguage() {
		// store each languge repeatation in count object

		result.forEach(function (i) {
			count[i] = (count[i] || 0) + 1;
		});

		// convert count to an arry and sort it

		let countArr = [];
		for (let j in count) {
			countArr.push([j, count[j]]);
		}
		// sorting countArr in ascending order

		countArr.sort(function (a, b) {
			return b[1] - a[1];
		});
		newArray = countArr.flat();
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
			<div className="result-div">
				<p id="favorite"> Favorite languge</p>
				<div className="languageUse">
					<div className="language">
						<p id="result-p"> {newArray[0] !== "null" && newArray[0]}</p>
						<p id="result-p"> {newArray[0] === "null" && newArray[2]}</p>
						<p id="result-p"> {newArray[0] === "null" && "No Result Found"}</p>
						<div className="language-icon">
							{(newArray[0] === "JavaScript" ||
								newArray[2] === "JavaScript") && (
								<img className="icon" src={JavaScript} alt={JavaScript} />
							)}
							{(newArray[0] === "HTML" || newArray[2] === "HTML") && (
								<img className="icon" src={HTML} alt={HTML} />
							)}
							{(newArray[0] === "CSS" || newArray[2] === "CSS") && (
								<img className="icon" src={CSS} alt={CSS} />
							)}
							{newArray[0] === "Java" && (
								<img className="icon" src={Java} alt={Java} />
							)}
							{newArray[0] === "Python" && (
								<img className="icon" src={Python} alt={Python} />
							)}
							{newArray[0] === "PHP" && (
								<img className="icon" src={PHP} alt={PHP} />
							)}
							{newArray[0] === "C#" && (
								<img className="icon" src={CSharp} alt={CSharp} />
							)}
							{newArray[0] === "C" && <img className="icon" src={C} alt={C} />}
							{newArray[0] === "C++" && (
								<img className="icon" src={CPlus2} alt={CPlus2} />
							)}
							{newArray[0] === "Ruby" && (
								<img className="icon" src={Ruby} alt={Ruby} />
							)}
							{newArray[0] === "Swift" && (
								<img className="icon" src={Swift} alt={Swift} />
							)}
							{newArray[0] === "Elixir" && (
								<img className="icon" src={Elixir} alt={Elixir} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
