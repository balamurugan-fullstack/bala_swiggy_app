import RestaurantCard from "../RestaurantCard";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import mockData from "./mocks/mockData.json"


it("should render Restaurant Component with props Data",() =>{
    render(<RestaurantCard resData={mockData} />);
    const name = screen.getByText("Pizza");

    expect(name).toBeInTheDocument();
});

