import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "auto", p: "0.2rem", bgcolor: "crimson", zIndex: 1201 }}>
      <Typography
        sx={{ textAlign: "center", verticalAlign: "middle", color: "#fff" }}
      >
        Made by{" "}
        <a
          style={{ textDecoration: "none", color: "#8ab4f8" }}
          target="_blank"
          href="https://github.com/Nithyayp"
        >
          Nithyashree Y P
        </a>
      </Typography>
    </Box>
  );
}

export default Footer