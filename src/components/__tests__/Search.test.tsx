import Body from "../Body";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
 
// Dummy fetch fn
(globalThis as any).fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


test("should Search Res List for burger text input", async() => {
    await act(async() =>  render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
));  

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: 'Search'});

    const searchInput = screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput, { target: { value: "burger"} });

    fireEvent.click(searchBtn);

    // screen should load 4 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);

});