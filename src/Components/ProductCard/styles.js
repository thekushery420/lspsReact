import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    margin: "0 auto",
    borderRadius: "20px",
    backgroundColor: "rgb(2, 54, 56)",
    boxShadow: "3px 3px 3px 3px black",
    opacity: ".95",
  },
  header: {
    textAlign: "center",
    color: "yellow",
  },
  media: {
    height: 0,
    width: "100px",
    paddingTop: "52.25%", // 16:9
    margin: "auto",
  },
  button: {
    fontWeight: 900,
    color: "yellow",
    letterSpacing: "1px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(360deg)",
  },
  Typography: {
    color: "#fff",
  },
}));
