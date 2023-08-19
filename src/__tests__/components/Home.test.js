import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchMovies } from "../../redux/Actions/action";
import Home from "../../components/Home/Home";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));
const mockMovieData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      popularity: 3354.676,
      poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
      release_date: "2023-06-14",
      title: "Elemental",
      video: false,
      vote_average: 7.7,
      vote_count: 994,
    },
    {
      adult: false,
      backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      genre_ids: [16, 28, 12, 878],
      id: 569094,
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      popularity: 2673.435,
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-05-31",
      title: "Spider-Man: Across the Spider-Verse",
      video: false,
      vote_average: 8.5,
      vote_count: 3468,
    },
  ],
  total_pages: 39606,
  total_results: 792108,
};
describe("Home Component", () => {
  it("renders loading state when movies are fetching", () => {
    const initialState = {
      fetchMoviesReducer: {
        movies: null,
        isFetching: true,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const loadingSpinner = screen.getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("renders movie cards when movies are fetched", async () => {
    const initialState = {
      fetchMoviesReducer: {
        movies: mockMovieData,
        isFetching: false,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    await waitFor(() => {
      const movieCards = screen.getAllByTestId("movie-card");
      expect(movieCards).toHaveLength(mockMovieData.results.length);
    });
  });

  it("does not render pagination when there is only one page", () => {
    const initialState = {
      fetchMoviesReducer: {
        movies: {
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
              genre_ids: [16, 35, 10751, 14, 10749],
              id: 976573,
              original_language: "en",
              original_title: "Elemental",
              overview:
                "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
              popularity: 3354.676,
              poster_path: "/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
              release_date: "2023-06-14",
              title: "Elemental",
              video: false,
              vote_average: 7.7,
              vote_count: 994,
            },
            {
              adult: false,
              backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
              genre_ids: [16, 28, 12, 878],
              id: 569094,
              original_language: "en",
              original_title: "Spider-Man: Across the Spider-Verse",
              overview:
                "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
              popularity: 2673.435,
              poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
              release_date: "2023-05-31",
              title: "Spider-Man: Across the Spider-Verse",
              video: false,
              vote_average: 8.5,
              vote_count: 3468,
            },
          ],
          total_pages: 1,
          total_results: 2,
        },
        isFetching: false,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const pagination = screen.queryByTestId("pagination");
    expect(pagination).toBeNull();
  });

  it("renders pagination when there are multiple pages", () => {
    const initialState = {
      fetchMoviesReducer: {
        movies: mockMovieData,
        isFetching: false,
      },
    };
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });
});
