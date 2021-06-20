import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Grid: {
    margin: "1.5em auto",
    display: "flex",
    alignItems: "center",
  },

  //card
  root: {
    borderRadius: "20px",
    boxShadow: "1px 1px 1px 1px rgba(2, 54, 56)",
    Width: "20%",
  },

  informationCards__title: {
    textAlign: "center",
  },

  informationCard__image: {
    height: "160px",
    width: "60%",
    margin: "auto",
    borderRadius: "10px",
  },

  informationCards__about: {
    width: "80%",
    margin: "0 auto",
    paddingTop: ".6em",
    fontSize: "1.1em",
  },

  informationCard__Link: {
    color: "green",
    fontWeight: "bold",
    fontSize: "1.3em",
    textDecoration: "none",
    cursor: "pointer",
    padding: "1em",
  },
}));
