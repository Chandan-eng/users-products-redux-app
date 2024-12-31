import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid2, Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/features/productSlice';
import AddProduct from './AddProduct';
import EditIcon from '@mui/icons-material/Edit';
export default function ProductList(props) {
  const { products } = props;
  const dispatch=useDispatch();
  const [edit,setEdit]=useState(false);
  const [product,setProduct]=useState(null);
  const handleRemoveProduct = (id) => {
        dispatch(deleteProduct(id));
    }

    const handleUpdate = (product) => {
        console.log("Product:",product);
        setProduct(product);
        setEdit(true);
    }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
        {
            edit && (
                <AddProduct open={edit} handleClose={()=>setEdit(false)} product={product}/>
            )
        }
      <Grid2 container spacing={2}>
        {products &&
          products.map((product, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.productImage}
                    alt={product.productImage}
                  />
                  <CardContent>
                    <Grid2 display={"flex"} justifyContent={"space-between"}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.productName || "Product Name"}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {`$${product.productPrize}` || "Product Prize"}
                    </Typography>
                    </Grid2>
                    <Grid2>
                    <Typography variant="body2" color="text.secondary">
                      {`Quantity: ${product.quantity}` || "Quantity"}
                    </Typography>
                    </Grid2>
                    <Grid2 display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {product.productDescription || "Product description goes here."}
                    </Typography>
                    <Typography>
                    <Button size='small' color="error" onClick={()=>handleRemoveProduct(product?.id)}>Remove Product</Button>
                    </Typography>
                    </Grid2>
                    <Typography variant="body2" color="green" onClick={()=>handleUpdate(product)}>
                       Update Product Details <EditIcon style={{marginBottom:'-5px'}}/>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
      </Grid2>
    </Box>
  );
}
