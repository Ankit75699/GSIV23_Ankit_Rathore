import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBox = styled(Grid)(() => ({
  padding: "0px 30px",
  marginTop: "0px",
  "& .MovieDetails": {
    display: "flex",
    gap: "30px",

    "& .MovieDescriptionRight": {
      "& .titleBox": {
        fontWeight: "600",
        fontSize: "22px",
        display: "flex",
        gap: "10px",
        "& p": {
          marginTop: 0,
        },
      },
      "& .Cast": {
        marginTop: "15px",
        marginBottom: "15px",
      },
      "& rightContentTextColor": {
        color: "#4A4A4A",
      },
    },
    "& .MovieDescriptionLeft": {
      "& img": {
        height: "25vh",
        border: "2px solid grey",
      },
    },
    "@media (max-width: 767px)": {
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MovieDescriptionLeft": {
        "& img": {
          height: "auto",
        },
      },
    },
  },
}));
