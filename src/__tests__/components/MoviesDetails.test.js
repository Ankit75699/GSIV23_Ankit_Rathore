import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import MovieDetails from "../../components/MovieDetails/MovieDetails";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe("MovieDetails Component", () => {
  it("renders loading state when movies are fetching", () => {
    const initialState = {
      movieDetailsReducer: {
        movieDetail: {},
        isFetchingMovieDetail: true,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );

    const loadingSpinner = screen.getByTestId("details-loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("renders movie details when data is fetched", async () => {
    const mockMovieDetail = {
      original_title: "Mock Movie",
      release_date: "2023-08-20",
      runtime: 120,
      production_companies: [{ name: "Mock Company" }],
      overview: "This is a mock movie.",
      poster_path: "mock-poster.jpg",
    };

    const initialState = {
      movieDetailsReducer: {
        movieDetail: mockMovieDetail,
        isFetchingMovieDetail: false,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MovieDetails />
      </Provider>
    );

    const movieCards = screen.getByTestId("movie-details");
    expect(movieCards).toBeInTheDocument();
  });
});
