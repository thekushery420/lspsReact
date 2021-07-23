import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  parallax__backgroundImage: {
    height: "25vh",
    backgroundSize: "cover",
    objectFit: " cover",
    backgroundPosition: "center",

    /* Creating Parallax scrolling */
    backgroundAttachment: "fixed",
    backgroundRepeat: " no-repeat",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: "3em",
    letterSpacing: "2px",
  },
});

export default function Parallax(props) {
  const classes = useStyles();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className={classes.parallax__backgroundImage}
      >
        <h1 className={classes.title}>{props.title}</h1>
      </div>
    </>
  );
}
