import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="container d-flex justify-content-between align-items-center py-4">
        <div className="d-flex align-items-baseline">
          <h6>CompanyName</h6>
          {/* <img
            width={50}
            src=""
            alt=""
          /> */}
        </div>

        <ul className="list-unstyled d-flex gap-4 align-items-baseline mb-0">
          <li> Link 1</li>
          <li> Link 2</li>
          <li> Link 3</li>
          <button className="btn btn-sm btn-outline-light ">Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
