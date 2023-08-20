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
    fontSize: "13px",
    marginBottom: "0px",
    fontWeight: "600",
    color: "#4A4A4A",
  },
  "& .rate": {
    color: "#9B9B9B",
  },
}));

const MovieCard = ({ movie }) => {
  const { id, original_title, overview, poster_path, vote_average } = movie;
  return (
    <Link to={`/movie-details/${id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={`${process.env.REACT_APP_IMAGE_URL}/${poster_path}`}
            alt="movie poster"
            style={{ objectFit: "fill" }}
          />
          <CardContent>
            <CardHeading>
              <Typography
                className="heading"
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "1",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {original_title}
              </Typography>
              <Box className="rate">{`(${vote_average})`}</Box>
            </CardHeading>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "12px", color: "#544f4f" }}
            >
              {overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCard;
