import "./AppSearch.css";
function AppSearch({ searchText, setSearchText }) {
  return (
    <div className="app-search">
      <input
        type="text"
        className="app-search-input"
        placeholder="ค้นหา"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
    </div>
  );
}

export default AppSearch;
