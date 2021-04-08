import React, { Link } from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <h1 className="font-sans text-3xl font-semibold">
            <Link className="cursor-pointer" to="/">
              Citly
            </Link>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
