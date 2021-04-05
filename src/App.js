import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';

function App() {
	return (
		<div className="App">
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={request.fetchNetflixOriginals}
			/>
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Row title="Romantic Movies" fetchUrl={request.fetchRomanticMovies} />
			<Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
		</div>
	);
}

export default App;
