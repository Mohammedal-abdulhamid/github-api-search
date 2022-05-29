
import './App.css';
import Form from './Form';
import SearchResult from './SearchResult';


function App({ newArray }) {
	return (
		<div className="App">
			<header className="App-header">
				<Form  />
			</header>
			{/* <main className="App-main">
				<SearchResult language={newArray} />
			</main> */}
		</div>
	);
}

export default App;
