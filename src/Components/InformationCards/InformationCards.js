import React from "react";
import { useStyles } from "./styles";

import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function InformationCards(props) {
  const { item } = props;
  const classes = useStyles();
  return (
    <>
      <Grid item className={classes.Grid} xs={12} sm={8} md={5} lg={4} xl={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent className={classes.informationCard__title}>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <CardMedia
                className={classes.informationCard__image}
                image={item.image}
              />
              <Typography className={classes.informationCard__about}>
                {item.about}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              className={classes.informationCard__Link}
              target="_blank"
              href="https://www.iheartjane.com/stores/2621/last-stop-pot-shop"
              style={{ backgroundColor: `${props.backgroundColor}` }}
            >
              {item.buttonText}
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default InformationCards;
