import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Error from "./components/Error";
import PageLoader from "./components/PageLoader";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import "/index.css";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";

const Body = lazy(() => import("./components/Body"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantsMenu = lazy(() => import("./components/RestaurantsMenu"));
const Cart = lazy(() => import("./components/cart"));
const Grocery = lazy(() => import("./components/Grocery"));
const OrderHistory = lazy(() => import("./components/OrderHistory"));
const OrderTracking = lazy(() => import("./components/OrderTracking"));
const AddressManagement = lazy(() => import("./components/AddressManagement"));

const LazyPage = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const AppLayout = () => {
    const [userInfo, setUserInfo] = useState();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const data = { name: "Balamurugan N" };
        setUserInfo(data.name);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo, theme, toggleTheme }}>
                <div className="app bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-colors duration-300">
                    <Header />
                    <ToastContainer position="bottom-right" autoClose={2000} />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouuter = createHashRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <LazyPage><Body /></LazyPage> },
            { path: "/about", element: <LazyPage><About /></LazyPage> },
            { path: "/contact", element: <LazyPage><Contact /></LazyPage> },
            { path: "/restaurants/:resID", element: <LazyPage><RestaurantsMenu /></LazyPage> },
            { path: "/grocery", element: <LazyPage><Grocery /></LazyPage> },
            { path: "/cart", element: <LazyPage><Cart /></LazyPage> },
            { path: "/orders", element: <LazyPage><OrderHistory /></LazyPage> },
            { path: "/track-order", element: <LazyPage><OrderTracking /></LazyPage> },
            { path: "/addresses", element: <LazyPage><AddressManagement /></LazyPage> },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouuter} />);
