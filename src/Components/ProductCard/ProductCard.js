import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';







const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);


  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 275,
      margin: "0 auto"
    },
    header:{
      textAlign: "center"
    },
    media: {
      height: 0,
      width: "100px",
      paddingTop: '56.25%', // 16:9
      margin: "0 auto",
    },
    button:{
      color: "black",
      fontWeight: 900
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(360deg)',
    }
  }));
  const classes = useStyles()


  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  return (
    <Grid item xs={12} sm={6} md={6} lg={3} >
      <Card className={classes.root} style={{ backgroundColor: "white" }}>
        <CardHeader
        className={classes.header}
          title={product.name}
          subheader="product"
        />
        <CardMedia
          className={classes.media}
          image={product.img} style={{ width: "135px" }} alt=""
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
            {/* <ExpandMoreIcon /> */}
            <Button className={classes.button}>Learn More</Button>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{product.name} -</Typography>
            <Typography paragraph>
              {product.about}
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>






  )
}

export default ProductCard
