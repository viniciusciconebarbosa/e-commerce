"use client";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface LoginFormProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function LoginForm({ onSubmit, isLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
      <TextField
        fullWidth
        label="Email Address"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        sx={{ mb: 2 }}
        InputProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      />

      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type={showPassword ? "text" : "password"}
        sx={{ mb: 2 }}
        InputProps={{
          sx: {
            borderRadius: 2,
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="body2"
          component="a"
          href="#"
          sx={{
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Forgot password?
        </Typography>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        disabled={isLoading}
        sx={{
          mb: 2,
          background: "linear-gradient(90deg, #129982, #7c7c7c)"
        }}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </Box>
  );
}