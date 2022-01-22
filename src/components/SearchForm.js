import { FaSearchLocation } from "react-icons/fa";

const SearchForm = ({ setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    setSearch(searchValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search city" name="search" />
      <button type="submit">
        <FaSearchLocation role="button" tabIndex="0" />
      </button>
    </form>
  );
};

export default SearchForm;
