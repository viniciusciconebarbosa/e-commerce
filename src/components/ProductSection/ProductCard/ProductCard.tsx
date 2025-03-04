import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Rating,
    Chip,
    IconButton,
    Box,
  } from "@mui/material";
  import { Favorite, FavoriteBorder } from "@mui/icons-material";
  
  interface ProductCardProps {
    product: {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: {
        rate: number;
        count: number;
      };
    };
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
    handleAddToCart: (product: any) => void;
  }
  
  export function ProductCard({
    product,
    isFavorite,
    toggleFavorite,
    handleAddToCart,
  }: ProductCardProps) {
    return (
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRadius: "0%"
        }}
      >
        <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}>
          <IconButton
            onClick={() => toggleFavorite(product.id)}
            color="primary"
            sx={{
              bgcolor: "background.paper",
              "&:hover": { bgcolor: "background.paper" },
            }}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
  
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", p: 2}}
        />
  
        <CardContent sx={{ flexGrow: 1,  }} >
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
  
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Rating value={product.rating.rate} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.rating.count})
            </Typography>
          </Box>
  
          <Chip label={product.category} size="small" sx={{ mb: 1 }} />
  
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              mb: 1,
            }}
          >
            {product.description}
          </Typography>
  
          <Typography variant="h6" color="primary" sx={{ mt: "auto" }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
  
        <CardActions>
          <Button variant="contained" sx={{ bgcolor:"#11998cea", 
            color:"text.secondary", borderRadius: "0%"}} 
            fullWidth onClick={() => handleAddToCart(product)}>
            Adicionar
          </Button>
        </CardActions>
      </Card>
    );
  }