import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="d-flex justify-content-center gap-4">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/reviews">Reviews</Link>
        </span>
        <span>
          <Link to="/dashboard">Dashboard</Link>
        </span>
        <span>
          <Link to="/blogs">Blogs</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
