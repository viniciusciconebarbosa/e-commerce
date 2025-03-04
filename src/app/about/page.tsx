import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import Image from "next/image";
import loja from "@/assets/loja-virtual.jpg"
import picture from "@/assets/picture.jpg"
import avatar from "@/assets/avatar.png"


export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Sobre ModernShop
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Nossa historia, missão, e valores.
        </Typography>
      </Box>

      <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Nossa história.
            </Typography>
            <Typography color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse dolore recusandae 
              non, aperiam ad eos adipisci consequuntur, nemo debitis possimus est officia minima
               soluta suscipit, aspernatur temporibus repellendus totam!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "400px" },
              }}
            >
              <Image
                src={loja}
                alt="Nossa história"
                fill
                style={{ objectFit: "cover", filter: "grayscale(100%)" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Nossos valores.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Qualidade.
              </Typography>
              <Typography color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni autem 
                nemo repellat earum, minima, nobis inventore culpa sed unde ex alias! 
                Molestias suscipit saepe ratione maiores ex officiis id quod?
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Sustentabilidade.
              </Typography>
              <Typography color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis explicabo 
                doloribus autem, magnam officia quisquam deleniti provident iste porro sint
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Consumidor.
              </Typography>
              <Typography color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illum dolores 
                laudantium commodi ad ullam odio quam dignissimos porro magnam repellat, 
                totam quas aperiam quod molestiae omnis animi atque iure..
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Nossa equipe.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2, justifyContent: "center" }}>
        
            <Grid item xs={12} sm={6} md={4} >
              <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                <Box
                  sx={{
                    justifyContent: "center",
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <Image
                    src={picture}
                    alt={`Team member 1`}
                    fill
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </Box>
                <Typography variant="h6">Vinicius</Typography>
                <Typography color="text.secondary">CEO</Typography>
              </Paper>
              
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
              <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
                <Box
                  sx={{
                    justifyContent: "center",
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <Image
                    src={avatar}
                    alt={`Team member 1`}
                    fill
                    style={{ objectFit: "fill", borderRadius: "50%", filter: "grayscale(100%)" }}
                  />
                </Box>
                <Typography variant="h6">Co-Founder</Typography>
                <Typography color="text.secondary">Co-Founder</Typography>
              </Paper>
              
            </Grid>
        </Grid>
        
        
      </Box>
    </Container>
  );
}
