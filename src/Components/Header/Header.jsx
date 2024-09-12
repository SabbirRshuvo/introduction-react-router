import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <h2>Header</h2>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
