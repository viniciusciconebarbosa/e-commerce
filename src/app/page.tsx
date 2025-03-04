
import { Box, Container, Typography } from "@mui/material";
import ImageSlider from "@/components/image-slider";

export default function Home() {
  return (
    <Box>
      <ImageSlider />
      <Container maxWidth="lg" sx={{ py: 4 }}/>
      <Box sx={{ mb:4, textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Bem vindo a ModernShop
          </Typography>
          <Typography variant="h6" color="text.secondary" component="p">
            Descubra nossa coleção selecionada de produtos premium
          </Typography>
          
        </Box>
    </Box>
  );
}
