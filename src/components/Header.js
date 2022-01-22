import Nav from "./Nav";

const Header = ({ title, search, setSearch }) => {
  return (
    <header>
      <Nav title={title} search={search} setSearch={setSearch} />
    </header>
  );
};

export default Header;
