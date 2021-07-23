import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    marginTop: "3.9em",
  },
  aboutUs__title: {
    color: "green",
    fontSize: "2.5em",
    fontWeight: "bold",
    margin: "0 auto",
    marginTop: "20px",
    paddingBottom: "10px",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.8em",
    },
  },
  aboutUs__description: {
    fontSize: "1.3em",
    fontWeight: "600",
    lineHeight: "1.4",
    letterSpacing: ".5px",
    paddingTop: "20px",
    textAlign: "center",
  },
}));
