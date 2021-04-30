import React, { useState } from "react";
import { useStyles } from "./styles";

import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { IconButton } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Button from "@material-ui/core/Button";

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  //getting external style page
  const classes = useStyles();

  // learn more button
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          title={product.name}
          subheader="product"
        />
        <CardMedia
          className={classes.media}
          image={product.img}
          style={{ width: "131px" }}
          alt=""
        />
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Button className={classes.button}>
              {expanded ? "Close" : "Learn More"}
            </Button>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className={classes.Typography} paragraph>
              {product.name} -
            </Typography>
            <Typography className={classes.Typography} paragraph>
              {product.about}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default ProductCard;
