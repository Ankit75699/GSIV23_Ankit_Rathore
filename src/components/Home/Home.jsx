import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../Movies/MovieCard";
import Header from "../Header/Header";
import { styled } from "@mui/material/styles";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
  {
    id: 1,
    title: "Movie 1",
    rating: 7.5,
    description: "Description of Movie 1...",
    imageUrl: "url_to_movie_1_image",
  },
];

const ContainerBox = styled(Grid)(({ theme }) => ({
  padding: "0px 30px",
  marginTop: "0px",
  "& .cards": {
    marginBottom: "0px",
    "& .MuiPaper-root": {
      boxShadow: "2px 2px 10px #c1c1c1",
      borderRadius: "15px",
      "@media (max-width: 600px)": {
        maxWidth: "100%",
      },
    },
  },
}));

const Home = () => {
  return (
    <>
      <Header />
      <ContainerBox container spacing={4}>
        {movies.map((movie) => (
          <Grid
            className="cards"
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            key={movie.id}
          >
            <MovieCard
              title={movie.title}
              rating={movie.rating}
              description={movie.description}
              imageUrl={movie.imageUrl}
            />
          </Grid>
        ))}
      </ContainerBox>
    </>
  );
};

export default Home;
