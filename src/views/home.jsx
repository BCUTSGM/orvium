import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import logo from "../assets/orvium.png";
import Imagen from "../assets/home/Inicio portada.png";
import consultoria from "../assets/home/Consultoría.png";
import asesoria from "../assets/home/Asesoría.png";
import mentoria from "../assets/home/Mentoría.png";
import viñeta from "../assets/Viñeta1.png"
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Title
    document.title = t("home_page.meta_titulo");

    // Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("home_page.meta_descripcion");

    // Canonical
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.orvium.com/";
  }, [t]);

  return (
    <Box>
      {/* Sección principal */}
      <Box
        sx={{
          backgroundImage: `url(${Imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          mb: 6,
        }}
      >
        <Box sx={{ padding: 12, textAlign: "left" }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: "300px" }} />
          <Typography
            variant="h6"
            color="white"
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            {t("home_page.subtitulo")}
            <br></br>
            {t("home_page.subtitulo2")}
          </Typography>
          <Button
            variant="contained"
            endIcon={<WhatsAppIcon />}
            href="https://api.whatsapp.com/send/?phone=525560751740&text=Hola,+quisiera+más+información"
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              background: "#1f7a8b",
              mt: 2,
            }}
          >
            {t("home_page.boton_contacto")}
          </Button>
        </Box>
      </Box>

      {/* Quiénes somos */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ color: "#113a63", fontWeight: "bold", mb: 3 }}
        >
          {t("home_page.quienes_somos_titulo")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#113a63",
            fontSize: { xs: "1rem", md: "1.2rem" },
            textAlign: "justify",
          }}
        >
          {t("home_page.quienes_somos_texto")}
        </Typography>
      </Box>

      {/* Servicios */}
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            mb: 4,
          }}
        >
          {t("home_page.servicios_titulo")}
        </Typography>

        <Grid container spacing={4} justifyContent="center" textAlign="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src={consultoria}
              alt="Consultoría"
              sx={{
                width: "100%",
                height: { xs: 300, md: 350 },
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: 2,
              }}
              onClick={() => navigate("/servicios/consultoria")}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src={asesoria}
              alt="Asesoría"
              sx={{
                width: "100%",
                height: { xs: 300, md: 350 },
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: 2,
              }}
              onClick={() => navigate("/servicios/asesoria")}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              component="img"
              src={mentoria}
              alt="Mentoría"
              sx={{
                width: "100%",
                height: { xs: 300, md: 350 },
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: 2,
              }}
              onClick={() => navigate("/servicios/mentoria")}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Beneficios */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#1f7a8b",
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          {t("home_page.beneficios_titulo")}
        </Typography>

        <List sx={{ color: "#113a63", maxWidth: 800, mx: "auto" }}>
          {[...Array(5)].map((_, i) => (
            <ListItem key={i} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 24 }}>
                    <img src={viñeta} alt="icono" width="15" height="15" />
              </ListItemIcon>
              <ListItemText
                primary={t(`home_page.beneficios_lista.${i}`)}
                sx={{ color: "#113a63" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Sectores */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 6, backgroundColor: "#f6f8fa" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#113a63",
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          {t("home_page.sectores_titulo")}
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: "#1f7a8b",
                }}
              >
                {t(`home_page.sectores_lista.${i}`)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Por qué elegirnos */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#113a63",
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          {t("home_page.porque_elegirnos_titulo")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#113a63",
            textAlign: "justify",
            maxWidth: 900,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          {t("home_page.porque_elegirnos_texto")}
        </Typography>
      </Box>

      {/* Llamado a la acción */}
      <Box
        sx={{
          px: 4,
          py: 8,
          background: "#1f7a8b",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {t("home_page.llamado_accion_titulo")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "1rem", md: "1.2rem" },
            maxWidth: 800,
            mx: "auto",
          }}
        >
          {t("home_page.llamado_accion_texto")}
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 3,
            px: 3,
            py: 1.5,
            fontSize: "1rem",
            background: "#113a63",
          }}
          onClick={() => navigate("/contacto")}
        >
          {t("home_page.llamado_accion_boton")}
        </Button>
      </Box>
    </Box>
  );
}
