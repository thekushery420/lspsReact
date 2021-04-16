import React from 'react'
import {Grid}from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import Hero from "../Components/Hero/Hero"

import {ProductItems} from "../Components/ProductCard/ProductItems"
import ProductCard from "../Components/ProductCard/ProductCard"

// import Grid_Background from "../Assets/Card_Background.jpg"

const useStyles = makeStyles((theme) => ({
   Grid: {
    
   
     
   }
 }));
 

function Home() {


    const classes = useStyles()

    return (
       <>
       <section>
         <Hero />
       </section>
       
       <section>
         <Grid className={classes.Grid}container spacing={4}>
               {ProductItems.map(product =>(
                  <ProductCard key={product.id} product={product} /> 
               ))}
         </Grid>
       </section>
       
       
       </>
       
    )
}

export default Home
