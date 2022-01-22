import SearchForm from "./SearchForm";

const Nav = ({ title, setSearch }) => {
  return (
    <nav className="container-fluid navbar navbar-light bg-light fixed-top">
      <a className="secondary brand fs-1" href="/">
        {title}
      </a>
      <SearchForm setSearch={setSearch} />
    </nav>
  );
};

export default Nav;
