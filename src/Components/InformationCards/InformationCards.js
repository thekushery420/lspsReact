import React from "react";
import { useStyles } from "./styles";

import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function InformationCards({ item }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.Grid} xs={12} sm={8} md={6} lg={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <CardMedia
                className={classes.media}
                image={item.image}
                title="Contemplative Reptile"
              />
              <Typography>{item.about}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {item.buttonText}
            </Button>
            {/* <Button size="small" color="primary">
              Learn More
            </Button> */}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default InformationCards;
