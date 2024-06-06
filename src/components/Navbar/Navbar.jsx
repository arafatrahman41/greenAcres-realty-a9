import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import human from '../../assets/human-icon.jpg'

const Navbar = () => {
  const { logOut, user } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border border-[#82896E] text-[#82896E] bg-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "border border-[#82896E] text-[#82896E] bg-white" : ""
          }
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border border-[#82896E] text-[#82896E] bg-white" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7B4B36] to-[#82896E] text-transparent bg-clip-text bg-300% animate-gradient">
          GreenAcres Realty
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user.photoURL ? <img src={user.photoURL} alt="" /> : <img src={human}></img>
                }
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost ">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                onClick={logOut}
                className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="block w-32 p-3 text-center bg-[#264025] font-medium text-lg text-white hover:opacity-95"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
