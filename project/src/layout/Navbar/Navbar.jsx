import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="container d-flex justify-content-between align-items-center py-4">
        <div className="d-flex align-items-baseline">
          <img
            width={150}
            src="https://yomacenter.se/wp-content/themes/bz-app-theme/assets/images/YOMA_Eng.svg"
            alt=""
          />
        </div>

        <ul className="list-unstyled d-flex gap-4 align-items-baseline mb-0">
          <li>KURSER</li>
          <li>KONSERTER & INSPELNINGAR</li>
          <li>POLSTJÄRNEPRISET</li>
          <li>OM NATIONELLT CENTRUM</li>
          <button className="btn btn-sm btn-outline-light ">Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
