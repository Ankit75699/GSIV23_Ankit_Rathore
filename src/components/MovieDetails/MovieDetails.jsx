import React from "react";
import { Grid, Box } from "@mui/material";
import { ContainerBox } from "./MovieDetailsStyles";
import Header from "../Header/Header";

const MovieDetails = () => {
  return (
    <>
      <Header />
      <ContainerBox container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box className="MovieDetails">
            <Box className="MovieDescriptionLeft">
              <img src="https://placebear.com/g/400/300" alt="sdifu" />
            </Box>
            <Box className="MovieDescriptionRight">
              <Box className="titleBox">
                <p>Movie Title</p>
              </Box>
              <Box>Year | Length | Director</Box>
              <Box className="Cast">Cast: Actor 1, Actor2</Box>
              <Box>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nostrum dignissimos id quos omnis quae ad, soluta
                reprehenderit repellendus corporis minus maiores deleniti
                voluptates voluptate sint, ea eum! Aut odio ipsa, animi unde sit
                in voluptas veniam laborum nihil explicabo, reprehenderit, illum
                id iusto quaerat optio! Ratione aliquam magnam tempora nemo
                quasi omnis veritatis? Suscipit, ab libero ad quisquam minus
                illo. Voluptas doloribus incidunt exercitationem temporibus,
                fugiat asperiores labore soluta cum, omnis nobis impedit quo,
                consectetur porro beatae fuga totam tenetur quidem ea minima
                mollitia dolorem minus? Quo esse illo voluptate recusandae, unde
                doloribus, dolorum quisquam velit, quia sapiente rem possimus!
              </Box>
            </Box>
          </Box>
        </Grid>
      </ContainerBox>
    </>
  );
};

export default MovieDetails;
