import { render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import mockData from "./mocks/mockData.json";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockData),
    })
);

it("Should render the body component with Search", async () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );

    const searchInput = await screen.findByPlaceholderText("Search restaurants...");
    expect(searchInput).toBeInTheDocument();
});
