import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/150' }
];

const ProductPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Products</Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/prices">View Price</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductPage;
