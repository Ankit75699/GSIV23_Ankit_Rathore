import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const CardHeading = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
  alignItems: "center",
  "& .heading": {
    fontSize: "20px",
    marginBottom: "0px",
  },
  "& .rate": {},
}));

const MovieCard = ({ title, rating, description, imageUrl }) => {
  const onClickHandler = () => {};
  return (
    <Link to="/movie-details" style={{ textDecoration: "none" }}>
      <Card onClick={() => onClickHandler()} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={"https://placebear.com/g/400/300"}
            alt="green iguana"
          />
          <CardContent>
            <CardHeading>
              <Typography
                className="heading"
                gutterBottom
                variant="h5"
                component="div"
              >
                Lizard
              </Typography>
              <Box className="rate">Rate</Box>
            </CardHeading>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
