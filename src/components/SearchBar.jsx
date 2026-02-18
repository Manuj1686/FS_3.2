function SearchBar({ setSearch }) {

  return (
    <input
      placeholder="Search books..."
      onChange={(e)=>setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
