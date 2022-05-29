
import './App.css';
import Form from './Form';
// import SearchResult from './SearchResult';
import Footer from "./Footer"


function App({ newArray }) {
	return (
		<div className="App">
			<header className="App-header">
				<Form  />
			</header>
			{/* <main className="App-main">
				<SearchResult language={newArray} />
			</main> */}
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
