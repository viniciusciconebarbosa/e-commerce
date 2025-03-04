import { Card, CardContent, Typography, Box } from "@mui/material";
import { LoginForm } from "../LoginForm/LoginForm";
import { SocialAuthButtons } from "../SocialAuthButtons/SocialAuthButtons";


interface LoginCardProps {
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function LoginCard({ onSubmit, isLoading }: LoginCardProps) {
  return (
    <Card
      elevation={10}
      sx={{
        overflow: "visible",
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: -20,
          left: -20,
          right: 20,
          bottom: 20,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: 4,
          zIndex: -1,
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #129982, #7c7c7c)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 3,
            }}
          >
            Welcome Back
          </Typography>

          <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
          <SocialAuthButtons />

          <Typography variant="body2" align="center" sx={{ color: "text.secondary" }}>
            Don't have an account?{" "}
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}