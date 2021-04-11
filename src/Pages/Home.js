import React from 'react'

import Hero from "../Components/Hero/Hero"

import {ProductItems} from "../Components/ProductCard/ProductItems"
import ProductCard from "../Components/ProductCard/ProductCard"

function Home() {

    return (
       <>
       <section>
       <Hero />
       </section>
       
       <section>
       <div className="products container">
          
            {ProductItems.map(product =>(
               <ProductCard key={product.id} product={product} /> 
            ))}
          
       </div>
       </section>
       
       
       </>
       
    )
}

export default Home
