import React from "react";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";

function AboutUs({ title, about }) {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <div className={classes.div}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.about}>{about}</p>
      </div>
    </Container>
  );
}

export default AboutUs;
