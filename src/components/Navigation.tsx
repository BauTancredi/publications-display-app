import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="m-5 flex justify-center gap-2">
        <li>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-500" : "inherit")} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-500" : "inherit")} to="/new">
            New Publication
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
