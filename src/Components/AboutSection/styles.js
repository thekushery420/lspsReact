import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0",
    textAlign: "center",
  },
  title: {
    color: "green",
    fontSize: "2.5em",
    fontWeight: "bold",
    borderBottom: " 1px solid green",
    width: "500px",
    margin: "0 auto",
    marginTop: "20px",
    marginBottom: "20px",
    paddingBottom: "20px",
  },
  about: {
    fontSize: "1.3em",
    fontWeight: "600",
    fontFamily: "ariel",
    lineHeight: "1.4",
    letterSpacing: "1px",
  },
}));
