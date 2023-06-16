import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="py-2" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-2" to="/instructors">
                Instructors
              </Link>
            </li>
            <li>
              <Link className="py-2" to="/classes">
                Classes
              </Link>
            </li>
            <li>
              <Link className="py-2" to="/instructorDashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <img
          src="https://i.ibb.co/j35Jr89/logo2.png"
          className="md:w-28 w-12"
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="py-2" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="py-2" to="/instructors">
              Instructors
            </Link>
          </li>
          <li>
            <Link className="py-2" to="/classes">
              Classes
            </Link>
          </li>
          <li>
            <Link className="py-2" to="/instructorDashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-10">
        {user ? (
          <>
            <img src={user.photoURL} alt="" className="w-[50px] rounded-full" />
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
