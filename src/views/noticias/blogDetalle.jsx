import { Box, Typography, CardMedia, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function BlogDetalle() {
  const location = useLocation();
  const navigate = useNavigate();

  const { noticia } = location.state || {};

  if (!noticia) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h6">No se encontró la noticia.</Typography>
        <Button variant="contained" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          Volver
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {noticia.title}
      </Typography>

      {noticia.urlToImage && (
        <CardMedia
          component="img"
          image={noticia.urlToImage}
          alt={noticia.title}
          sx={{ 
            borderRadius: 2,
            width: { xs: '100%', sm: '80%', md: '60%' },
            maxHeight: { xs: 'auto', md: 400 },
            objectFit: 'cover',
            margin: '0 auto'
          }}
        />
      )}

      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, mt: 3 }}>
        {new Date(noticia.publishedAt).toLocaleDateString()}
      </Typography>

      <Typography variant="body1" sx={{ fontSize: "1rem", lineHeight: 1.6, textAlign: "justify" }}>
        { noticia.description || "Contenido no disponible"}
        {noticia.url && (
          <a 
            href={noticia.url} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#1976d2", textDecoration: "underline", fontWeight: 500, marginLeft: "10px" }}
          >
            Ver más
          </a>
        )}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => navigate(-1)}
      >
        Volver
      </Button>
    </Box>
  );
}
