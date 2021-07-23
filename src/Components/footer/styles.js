import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer_grid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  footer_ul: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin: "40px 20px",

    //footer links into column on mobile
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  footer_li: {
    margin: "0 20px",
    textDecoration: "none",
  },
  footer_link: {
    color: "yellow",
    fontSize: "1.3em",
  },
  footer_disclaimer: {
    color: "white",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    letterSpacing: "1px",
    paddingBottom: "2em",
  },
}));
