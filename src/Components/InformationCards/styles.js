import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Grid: {
    margin: "1.5em auto",
    display: "flex",
    alignItems: "center",
  },

  //card
  root: {
    borderRadius: "10px",
    boxShadow: "1px 1px 1px 1px rgba(2, 54, 56)",
    Width: "20%",
  },

  informationCard__title: {
    textAlign: "center",
    color: "green",
  },

  informationCard__image: {
    height: "160px",
    width: "60%",
    margin: "auto",
    borderRadius: "10px",
    paddingTop: "1em",
  },

  informationCard__about: {
    width: "80%",
    margin: "0 auto",
    paddingTop: ".6em",
    fontSize: "1.2em",
    color: "black",
  },

  informationCard__Link: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1.3em",
    cursor: "pointer",
    padding: ".5em",
    margin: ".5em",
    border: "1px solid black",
    textDecoration: "none",
    "&:hover": {
      background: "#005B8F",
    },
  },
}));
