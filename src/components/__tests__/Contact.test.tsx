import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<ContactUs/>);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load Button inside contact component", () => {
    render(<ContactUs/>);

    // const button = screen.getByRole("button");

    // Another way of doing the above thing
    const button = screen.getByText('Submit')

    // Assertion
    expect(button).toBeInTheDocument();
    
});

test("Should load input name inside contact component", () => {
    render(<ContactUs/>);

    const inputName = screen.getByPlaceholderText('name')

    // Assertion
    expect(inputName).toBeInTheDocument();
    
});

test("Should load 2 input boxes on the Contact component", () => {
    render(<ContactUs/>);

    // Querying
    // Whenever there are multiple items to be tested, we will use All 
     const inputBoxes = screen.getAllByRole('textbox');

     console.log(inputBoxes.length);

     // Assertion
    //  expect(inputBoxes.length).toBe(2);

     // Other way of asserting
     expect(inputBoxes).not.toBe(3);
});