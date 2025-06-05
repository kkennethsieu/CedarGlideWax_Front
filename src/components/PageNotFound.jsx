import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ParallaxHero from "./ParallaxHero";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <ParallaxHero>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: 120, mb: 2 }}
        >
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 400 }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </Box>
    </ParallaxHero>
  );
}
