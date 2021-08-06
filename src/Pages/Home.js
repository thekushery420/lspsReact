import React from "react";
import AboutUs from "../Components/AboutSection/AboutUs";
import Hero from "../Components/Hero/Hero";
// images
import ParallaxImage from "../Assets/parallax_Image.jpg";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// data
import { InformationItems } from "../Components/InformationCards/informationItems";
import { ProductItems } from "../Components/ProductCard/ProductItems";
import { AccordionSpecialsData } from "../Components/AccordionSpecials/AccordionSpecialsData";
// components
import ProductCard from "../Components/ProductCard/ProductCard";
import InformationCards from "../Components/InformationCards/InformationCards";
import Parallax from "../Components/Parallax/parallax";
import AccordionSpecials from "../Components/AccordionSpecials/AccordionSpecials";
import Contact from "../Components/contactInformation/Contact";

const useStyles = makeStyles((theme) => ({
  // about us
  home__aboutUsAndCardWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
  },

  // education cards
  educationGrid: {
    backgroundSize: "cover",
    marginTop: "6em",
    marginBottom: "4em",
    minHeight: "800px",
  },

  //  accordion specials
  specialsGrid: {
    borderTop: "1px solid black",
    minHeight: "750px",
  },
  specialsTitle: {
    textAlign: "center",
    color: "green",
    letterSpacing: "2px",
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },

  specialsRoot: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },

  //information Cards
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
      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* About us */}
      <div className={classes.home__aboutUsAndCardWrapper}>
        <AboutUs
          title="How We're Different"
          about="We are a licensed Washington state recreational marjuana retailer. Here you will find friendly and knowledgable budtenders. 
          The Last Stop Pot Shop is the LAST STOP to stock up on all your goodies before heading over the pass. Enjoy responsibly! Our employees have decades of Marijuana
           Experience under their belts, with some having transitioned directly from the Medical Marijuana Field to the Recreational side of things. This means we know how 
           to help you find exactly what you need, and we do it with a smile on our faces because we truly love what we do!"
        />

        {/* Shop and learn more */}
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

      {/* parallax */}
      <Parallax backgroundImage={ParallaxImage} title={"Get Educated"} />

      {/* education */}
      <section>
        <Grid className={classes.educationGrid} container spacing={3}>
          {ProductItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </section>

      {/* Daily Specials */}
      <Grid className={classes.specialsGrid} container spacing={0}>
        <div className={classes.specialsRoot}>
          <Typography className={classes.specialsTitle}>
            Daily Specials
          </Typography>
          {AccordionSpecialsData.map((special) => (
            <AccordionSpecials
              title={special.day}
              description={special.description}
              id={special.id}
            />
          ))}
        </div>
      </Grid>

      {/* Contact Information*/}
      <Contact />
    </>
  );
}

export default Home;
