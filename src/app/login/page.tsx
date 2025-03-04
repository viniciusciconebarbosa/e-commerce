"use client";
import { useState } from "react";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LoginCard } from "./LoginCard/LoginCard";


export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login attempt");
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #129982 0%, #7c7c7c 100%)",
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Container maxWidth="sm">
          <LoginCard onSubmit={handleSubmit} isLoading={isLoading} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}