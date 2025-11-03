import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function Noticias({ fetchLink }) {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = () => {
  fetch(fetchLink)
    .then((res) => {
      if (!res.ok) throw new Error("Error en la API");
      return res.json();
    })
    .then((data) => {
      if (data.articles) {
        setNoticias(data.articles.slice(0, 8));
      } else {
        console.error("Respuesta inesperada:", data);
      }
    })
    .catch((err) => console.error("Error al cargar noticias:", err));
};

  const nextSlide = () => {
    if (currentIndex < noticias.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Box>
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4, position: "relative"}}>
        {/* Flechas */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: 10, md: 30 },
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
          }}
          disabled={currentIndex === 0}
        >
          <ArrowBackIos sx={{ transform: "translateX(4px)" }}/>
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: 10, md: 30 },
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
          }}
          disabled={currentIndex >= noticias.length - itemsPerView}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* Carrusel */}
        <Box
          sx={{
            overflow: "hidden",
            pb: 3
          }}
        >
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 320}px)`
            }}
          >
            {noticias.map((noticia, i) => (
              <Card
                key={i}
                sx={{
                  width: { xs: "220px", sm: "260px", md: "280px", lg: "300px" },
                  flex: "0 0 auto",
                  borderRadius: 3,
                  boxShadow: 3,
                  mx: 1,
                }}
              >
                {noticia.urlToImage && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={noticia.urlToImage}
                    alt={noticia.title}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    {noticia.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" }, mb: 2 }}>
                    {new Date(noticia.publishedAt).toLocaleDateString()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    }}
                  >
                    {noticia.description || "Sin descripción disponible"}
                  </Typography>

                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => navigate(`/blog/detalle/${i}`, { state: { noticia } })}
                  >
                    Leer más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
