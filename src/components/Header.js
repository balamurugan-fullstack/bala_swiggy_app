import { cdn_url } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../utils/authSlice";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser, toggleTheme, theme } = useContext(userContext);
    const cartItem = useSelector((store) => store.cart.items);
    const { isAuthenticated } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const handleAuth = () => {
        if (isAuthenticated) {
            dispatch(logout());
        } else {
            dispatch(login({ name: loggedInUser || "Guest" }));
        }
    };

    const navLinkClass =
        "hover:text-white dark:hover:bg-slate-100 dark:hover:text-black dark:hover:rounded-lg dark:hover:p-1 dark:text-white";

    return (
      <header className="bg-[#f7b910] dark:bg-gray-800 dark:text-white shadow-md">
        <div className="flex flex-wrap items-center justify-between px-6 py-4 font-bold">
          <Link to="/">
            <img className="w-24" src={cdn_url} alt="Logo" />
          </Link>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <ul
            className={`
              flex flex-col md:flex-row
              gap-4 md:gap-6
              w-full md:w-auto
              bg-[#f7b910] md:bg-transparent
              dark:bg-gray-800
              px-6 md:px-0 py-6 md:py-0
              ${menuOpen ? "block" : "hidden"}
              md:flex
            `}
          >
            <li className={navLinkClass}>Online : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className={navLinkClass}><Link to="/">Home</Link></li>
            <li className={navLinkClass}><Link to="/about">About</Link></li>
            <li className={navLinkClass}><Link to="/contact">Contact</Link></li>
            <li className={navLinkClass}><Link to="/grocery">Grocery</Link></li>
            <li className={navLinkClass}><Link to="/orders">Orders</Link></li>
            <li className={navLinkClass}><Link to="/track-order">Track</Link></li>
            <li className={navLinkClass}><Link to="/addresses">Addresses</Link></li>
            <li className={`${navLinkClass} font-bold`}>
              <Link to="/cart">Cart ({cartItem.length})</Link>
            </li>
            <li className="dark:text-white">
              <button
                className="bg-black text-white px-4 py-1 rounded-md"
                onClick={handleAuth}
              >
                {isAuthenticated ? "Logout" : "Login"}
              </button>
            </li>
            <li className={navLinkClass}>{loggedInUser}</li>
            <li className={navLinkClass}>
              <button
                onClick={toggleTheme}
                className="bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-gray-300 dark:hover:text-black"
                aria-label="Toggle theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
};

export default Header;
