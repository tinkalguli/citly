import React from "react";
import { Link } from "react-router-dom";
import Container from "components/Container";

const NavBar = () => {
  return (
    <nav className="bg-white shadow py-2">
      <Container>
        <h1 className="font-sans text-2xl font-semibold">
          <Link className="cursor-pointer" to="/">
            Citly
          </Link>
        </h1>
      </Container>
    </nav>
  );
};

export default NavBar;
