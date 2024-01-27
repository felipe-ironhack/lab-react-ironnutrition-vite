function Search(props) {
	const { query, setQuery } = props;
	return (
		<>
			<label htmlFor='search'>Search: </label>
			<input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
		</>
	);
}

export default Search;
