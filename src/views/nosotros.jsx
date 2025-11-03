import {
  Box,
  Typography,
  Grid,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import fondo1 from "../assets/nosotros/fondo-fw1.png";
import fondo3 from "../assets/nosotros/fondo-fw2.png";
import fondo2 from "../assets/nosotros/fondo-fw3.png";
import { useTranslation } from "react-i18next";

export default function Nosotros() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("nosotros_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("nosotros_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.cslogix.com/nosotros";
  }, [t]);

  return (
    <Box>
      <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: { xs: 2, md: 4 }, textAlign: "center" }}>
        {/* Encabezado */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            mb: 4,
          }}
        >
          {t("nosotros_page.titulo_principal")}
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
          }}
        >
          {t("nosotros_page.subtitulo")}
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify" }}>
          {t("nosotros_page.parrafo_compromiso")}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%", py: 6, px: { xs: 2, sm: 4, md: 10 },
          backgroundColor: "#e2e2daff",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Columna Misión */}
          <Grid item xs={12} md={6} sx={{ flexBasis: 450 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              {t("nosotros_page.mision_titulo")}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {t("nosotros_page.mision_texto")}
            </Typography>
          </Grid>

          {/* Columna Visión */}
          <Grid item xs={12} md={6} sx={{ flexBasis: 450 }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
              {t("nosotros_page.vision_titulo")}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {t("nosotros_page.vision_texto")}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container sx={{ backgroundColor: "#b73939", mb: 5 }}>
        <Grid item xs={8}>
          <Box sx={{ padding: 4, textAlign: "justify" }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
                mb: 4,
              }}
            >
              {t("nosotros_page.gestion_titulo")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "#fff", textAlign: "justify" }}
            >
              {t("nosotros_page.gestion_parrafo")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[fondo1, fondo2, fondo3].map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`Contenedor ${index + 1}`}
                sx={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: 3,
                  boxShadow: 3,
                  objectFit: "cover",
                  mx: { xs: 1, md: 2 },
                  my: { xs: 1, md: 0 },
                }}
              />
            ))}
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 3,
                px: 3,
                py: 1.5,
                fontSize: { xs: "0.8rem", sm: "1rem" },
                background: "#e85252",
                mt: 4,
                mb: 2,
              }}
              onClick={() => navigate("/contacto")}
            >
              {t("nosotros_page.gestion_boton")}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}