import React from "react";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";

function AboutUs({ title, about }) {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <div className={classes.aboutUs__infoWrapper}>
        <h1 className={classes.aboutUs__title}>{title}</h1>
        <hr style={{width:"35%", margin: "0 auto"}}/>
        <div></div>
        <p className={classes.aboutUs__description}>{about}</p>
      </div>
    </Container>
  );
}

export default AboutUs;
