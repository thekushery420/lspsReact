import React from "react"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const ProductCard = ({product}) =>{
    return(
      <div>
          <Card>
              <CardHeader
              
            action={
                <IconButton>
                     <MoreVertIcon></MoreVertIcon>
                </IconButton>
            }

              />
          </Card>
      </div>   
    )
}

export default ProductCard
