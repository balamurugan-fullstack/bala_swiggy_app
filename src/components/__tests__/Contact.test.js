import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Page Test Case", () => {
    
    it("should load the contact Us component", () => {
        render (<Contact />)

        const heading  = screen.getByRole('heading');

        // Assertion
        expect(heading).toBeInTheDocument();
    });

    it("should load the button", () => {
        render (<Contact />)

        const Button  = screen.getByText('Submit');

        // Assertion
        expect(Button).toBeInTheDocument();
    });


    test("should load the input name inside the placeholder", () => {
        render (<Contact />)

        const input  = screen.getByPlaceholderText('Enter Your Name');

        // Assertion
        expect(input).toBeInTheDocument();
    });


    // test("should load the input name inside the placeholder", () => {
    //     render (<Contact />)
        
    //     // Querying
    //     const inputBox  = screen.getAllByRole('textarea');
    //     console.log(inputBox[0]);
        
    //     // Assertion
    //     expect (inputBox.length).toBe(2);
    // });
})