"use client"

import { useCart } from "@/components/cart-provider"
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Divider,
  TextField,
} from "@mui/material"
import { Add, Remove, Delete } from "@mui/icons-material"
import { useState } from "react"
import Link from "next/link"
import styled from "styled-components"

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 40px 0;
`

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [couponCode, setCouponCode] = useState("")

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 10 : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <EmptyCartMessage>
            <Typography variant="h5" gutterBottom>
              Seu carrinho está vazio.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Não se preocupe, você pode adicionar produtos à sua lista de 
              desejos e voltar para eles quando quiser.
            </Typography>
            <Button component={Link} href="/" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
              Continue comprando.
            </Button>
          </EmptyCartMessage>
        </Paper>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Seu Carrinho
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 2 }}>
            {cart.map((item) => (
              <Card key={item.id} sx={{ display: "flex", mb: 2, position: "relative" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, objectFit: "cover" }}
                  image={item.image}
                  alt={item.title}
                />
                <CardContent
                  sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography component="div" variant="h5">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <IconButton size="small" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Add fontSize="small" />
                    </IconButton>
                    <Typography sx={{ ml: 2 }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                    <IconButton color="error" sx={{ ml: "auto" }} onClick={() => removeFromCart(item.id)}>
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Paper>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} href="/" variant="outlined">
              Continuar Comprando
            </Button>
            <Button variant="outlined" color="warning" onClick={clearCart}>
              Limpar Carrinho
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Resumo do pedido
            </Typography>
            <Box sx={{ my: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Subtotal</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Pagamento </Typography>
                <Typography>${shipping.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">${total.toFixed(2)}</Typography>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Cupom de desconto"
                variant="outlined"
                size="small"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                Aplicar cupom
              </Button>
              <Button variant="contained" color="secondary" fullWidth>
                Finalizar compra
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

