import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or Brand */}
        <h1 className="text-black text-2xl font-bold"></h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "custom-text-active font-bold" : "custom-text"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive ? "custom-text-active font-bold" : "custom-text"
              }
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "custom-text-active font-bold" : "custom-text"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
