import { AiOutlineMenu } from "react-icons/ai";

const Nav = ({ title }) => {
  return (
    <nav className="container-fluid navbar navbar-light bg-light fixed-top">
      <a className="secondary brand fs-1" href="/">
        {title}
      </a>
      <AiOutlineMenu role="button" tabIndex="0" />
    </nav>
  );
};

export default Nav;
