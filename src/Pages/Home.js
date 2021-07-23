import React from "react";
import AboutUs from "../Components/AboutSection/AboutUs";
import Hero from "../Components/Hero/Hero";
// import Grid_Background from "../Assets/Cards_Background.PNG";
import ParallaxImage from "../Assets/parallax_Image.jpg";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProductItems } from "../Components/ProductCard/ProductItems";
import ProductCard from "../Components/ProductCard/ProductCard";
import InformationCards from "../Components/InformationCards/InformationCards";
import { InformationItems } from "../Components/InformationCards/informationItems";
import Parallax from "../Components/Parallax/parallax";

const useStyles = makeStyles((theme) => ({
  home__aboutUsAndCardWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "auto",

    // [theme.breakpoints.down("lg")]: {
    //   height: "auto",
    // },
  },

  Grid: {
    // backgroundImage: `url(${Grid_Background})`,
    backgroundSize: "cover",
    marginTop: "4em",
  },

  informationCards__Grid: {
    height: "700px",
    padding: ".7em",

    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <section>
        <Hero />
      </section>

      <div className={classes.home__aboutUsAndCardWrapper}>
        <AboutUs
          title="How We're Different"
          about="We are a licensed Washington state recreational marjuana retailer. Here you will find friendly and knowledgable budtenders. The Last Stop Pot Shop is the LAST STOP to stock up on all your goodies before heading over the pass. Enjoy responsibly! Our employees have decades of Marijuana Experience under their belts, with some having transitioned directly from the Medical Marijuana Field to the Recreational side of things. This means we know how to help you find exactly what you need, and we do it with a smile on our faces because we truly love what we do!"
        />

        <Grid className={classes.informationCards__Grid} container spacing={2}>
          {InformationItems.map((item) => (
            <InformationCards
              key={item.id}
              item={item}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </Grid>
      </div>

      <Parallax backgroundImage={ParallaxImage} title={"Get Educated"} />
      <section>
        <Grid className={classes.Grid} container spacing={3}>
          {ProductItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </section>
    </>
  );
}

export default Home;
