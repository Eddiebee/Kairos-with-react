import { FaSearchLocation } from "react-icons/fa";

const SearchForm = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    setSearch(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city"
        name="search"
        className="searchInput"
      />
      <button type="submit" className="searchBtn">
        <FaSearchLocation role="button" tabIndex="0" />
      </button>
    </form>
  );
};

export default SearchForm;
