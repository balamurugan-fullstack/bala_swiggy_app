import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { logout } from "../../utils/authSlice";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(() => {
    appStore.dispatch(logout());
});

it("Should load from Header Component with a login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider> 
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name : "Logout"});


    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
});

it("Should load from Header Component with a Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider> 
        </BrowserRouter>
    );

    const CartCount = screen.getByRole("button", {name : "Login"});

    expect(CartCount).toBeInTheDocument();
});