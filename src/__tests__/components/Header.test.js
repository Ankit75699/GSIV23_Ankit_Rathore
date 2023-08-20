import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header, {
  HeaderConditionalRender,
} from "../../components/Header/Header";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe("Header Component", () => {
  it("renders 'Movie Details' when id is present in url", () => {
    const params = { id: "some_id" };
    const { getByTestId } = render(<HeaderConditionalRender params={params} />);

    const movieDetailsText = getByTestId("movie-details");
    expect(movieDetailsText).toBeInTheDocument();
    expect(movieDetailsText).toHaveTextContent("Movie Details");
  });

  it("renders search input when id is not presented in url", () => {
    const { getByPlaceholderText } = render(<HeaderConditionalRender />);

    const searchInput = getByPlaceholderText("Search…");
    expect(searchInput).toBeInTheDocument();
  });

  it("triggers onChangeHandler when search input changes", () => {
    const mockOnChangeHandler = jest.fn();
    render(<Header onChangeHandler={mockOnChangeHandler} />);

    const searchInput = screen.getByPlaceholderText("Search…");
    const searchText = "example text";
    fireEvent.change(searchInput, { target: { value: searchText } });

    expect(mockOnChangeHandler).toHaveBeenCalledWith(searchText);
  });

  it("navigates to home page when home button is clicked", () => {
    render(<Header />);

    const homeButton = screen.getByLabelText("home");
    fireEvent.click(homeButton);

    expect(window.location.pathname).toBe("/");
  });
});
