import { Grid, Skeleton, Card, CardContent, CardActions } from "@mui/material";
import { ProductCard } from "../ProductCard/ProductCard";


interface ProductListProps {
  products: any[];
  loading: boolean;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  handleAddToCart: (product: any) => void;
}

export function ProductList({
  products,
  loading,
  favorites,
  toggleFavorite,
  handleAddToCart,
}: ProductListProps) {
  if (loading) {
    return (
      <Grid container spacing={3}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <Skeleton variant="rectangular" height={200} />
              <CardContent>
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={20} width="60%" />
                <Skeleton variant="text" height={20} width="40%" />
              </CardContent>
              <CardActions>
                <Skeleton variant="rectangular" height={36} width={100} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard
            product={product}
            isFavorite={favorites.includes(product.id)}
            toggleFavorite={toggleFavorite}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}