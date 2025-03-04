import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { JSX } from "@emotion/react/jsx-runtime";

export default function Footer(): JSX.Element {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ModernShop
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Seu destino único para produtos premium com serviço excepcional.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Todos os Produtos.
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Novidades
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Destaque
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Vendas
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Companhia
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  href="/about"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Trabalhe conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Imprensa e notícias
                </Link>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Suporte
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Vendas
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Devoluçoes
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  color="inherit"
                  underline="hover"
                  sx={{ display: "block", mb: 1 }}
                >
                  Politica de privacidade
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} ModernShop. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
