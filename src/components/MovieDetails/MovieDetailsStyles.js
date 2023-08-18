import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBox = styled(Grid)(() => ({
  padding: "0px 30px",
  marginTop: "0px",
  "& .MovieDetails": {
    display: "flex",
    gap: "30px",
    "& .MovieDescriptionLeft": {
      width: "14%",
      "& img": {
        width: "100%",
      },
    },
    "& .MovieDescriptionRight": {
      width: "80%",
      "& .titleBox": {
        fontWeight: "600",
        fontSize: "20px",
        "& p": {
          marginTop: 0,
        },
      },
      "& .Cast": {
        marginTop: "15px",
        marginBottom: "15px",
      },
    },
    "@media (max-width: 767px)": {
      flexWrap: "wrap",
      "& .MovieDescriptionLeft": {
        width: "100%",
        marginBottom: "20px",
      },
      "& .MovieDescriptionRight": {
        width: "100%",
      },
    },
  },
}));
