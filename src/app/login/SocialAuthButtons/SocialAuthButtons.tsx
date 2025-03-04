import { Box, IconButton, Typography, Divider } from "@mui/material";
import { Google, GitHub, LinkedIn } from "@mui/icons-material";

export function SocialAuthButtons() {
  return (
    <>
      <Box sx={{ position: "relative", my: 3 }}>
        <Divider>
          <Typography variant="body2" sx={{ color: "text.secondary", px: 1 }}>
            OR CONTINUE WITH
          </Typography>
        </Divider>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 3,
        }}
      >
        {[
          { icon: <Google />, color: "#DB4437" },
          { icon: <GitHub />, color: "#333" },
          { icon: <LinkedIn />, color: "#0077B5" },
        ].map((provider, index) => (
          <IconButton
            key={index}
            sx={{
              bgcolor: "background.paper",
              color: provider.color,
              border: "1px solid",
              borderColor: "divider",
              "&:hover": {
                bgcolor: "action.hover",
              },
            }}
          >
            {provider.icon}
          </IconButton>
        ))}
      </Box>
    </>
  );
}