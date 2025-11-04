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
import fondo from "../assets/home/portada.jpg";
import maritimo from "../assets/home/maritimo.png";
import terrestre from "../assets/home/terrestre.png";
import aereo from "../assets/home/aereo.png";
import servicios from "../assets/home/servicios.png";
import celular from "../assets/home/celular.jpg";
import documentacionOperacion from "../assets/home/1.png";
import despachoAduanal from "../assets/home/2.png";
import fisicoMercancia from "../assets/home/3.png";
import mundo from "../assets/home/mundo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import viñeta from "../assets/home/viñetaB.png"
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
    linkCanonical.href = "https://www.cslogix.com/";
  }, [t]);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 6,
        }}
      >
        <Box sx={{ padding: 4, textAlign: "right" }}>
          <Typography
            variant="h2"
            color="white"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            {t("home_page.portada_titulo")}
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            {t("home_page.portada_subtitulo_1")}
          </Typography>
          <Button
            variant="contained"
            endIcon={<WhatsAppIcon />}
            href="https://api.whatsapp.com/send/?phone=525560751740&text=Quiero+una+Demo+y+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1.5,
              fontSize: "0.5 rem",
              background: "#1f7a8b",
              mt: 2,
            }}
          >
            {t("home_page.portada_boton")}
          </Button>
        </Box>
      </Box>

      <Box sx={{ padding: 4, textAlign: "justify" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          {t("home_page.servicios_titulo")}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          {t("home_page.servicios_subtitulo")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#113a63", textAlign: "center", mb: 2 }}
        >
          {t("home_page.servicios_parrafo")}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" textAlign="center">
        {/* Primer servicio */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#113a63" }}
          >
            {t("home_page.servicios_card_maritimo")}
          </Typography>
          <Box
            component="img"
            src={maritimo}
            alt="Maritimo"
            sx={{
              width: "100%",
              height: { xs: 300, sm: 300, md: 350 },
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: 2,
            }}
            onClick={() => (window.location.href = "/servicios/maritimo")}
          />
        </Grid>
        {/* Segundo servicio */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#113a63" }}
          >
            {t("home_page.servicios_card_terrestre")}
          </Typography>
          <Box
            component="img"
            src={terrestre}
            alt="Terrestre"
            sx={{
              width: "100%",
              height: { xs: 300, sm: 300, md: 350 },
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: 2,
            }}
            onClick={() => (window.location.href = "/servicios/terrestre")}
          />
        </Grid>
        {/* Tercer servicio */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#113a63" }}
          >
            {t("home_page.servicios_card_aereo")}
          </Typography>
          <Box
            component="img"
            src={aereo}
            alt="Aereo"
            sx={{
              width: "100%",
              height: { xs: 300, sm: 300, md: 350 },
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: 2,
            }}
            onClick={() => (window.location.href = "/servicios/aereo")}
          />
        </Grid>
      </Grid>

      <Box sx={{ padding: 4, textAlign: "justify", mt: 6 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          {t("home_page.control_titulo")}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          {t("home_page.control_subtitulo")}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${servicios})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          minHeight: { xs: "20vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 5,
        }}
      ></Box>

      <Grid container spacing={4} sx={{ backgroundColor: "#b73939", p: 1 }}>
        {/* Primer contenedor */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ px: { xs: 0, md: 0 }, mx: { xs: "auto", md: 0 } }}
        >
          <Box
            component="img"
            src={celular}
            alt="celular"
            sx={{
              width: "100%",
              height: { xs: 300, md: 550 },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>
        {/* Segundo contenedor */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              textAlign: { xs: "center", md: "left" },
              p: { xs: 1, md: 0 },
            }}
          >
            <Box sx={{ maxWidth: "800px" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
              >
                {t("home_page.tecnologia_subtitulo")}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                }}
              >
                {t("home_page.tecnologia_titulo")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: "#fff" }}>
                {t("home_page.tecnologia_parrafo")}
              </Typography>
              <List sx={{ color: "#fff", pl: { xs: 0, md: 2 } }}>
                <ListItem sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 24, mr: 2 }}>
                    <img src={viñeta} alt="icono" width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText primary={t("home_page.tecnologia_lista_1")} />
                </ListItem>

                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24, mr: 2}}>
                    <img src={viñeta} alt="icono" width="20" height="20" />
                  </ListItemIcon>
                  <ListItemText primary={t("home_page.tecnologia_lista_2")} />
                </ListItem>
              </List>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 1.5,
                  fontSize: "0.5 rem",
                  background: "#e85252",
                  mt: 2,
                }}
                onClick={() => navigate("/nosotros")}
              >
                {t("home_page.tecnologia_boton")}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ padding: 4, textAlign: "justify" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {t("home_page.beneficios_titulo")}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
          }}
        >
          {t("home_page.beneficios_subtitulo")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#113a63", textAlign: "center" }}
        >
          {t("home_page.beneficios_parrafo")}
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
        {[documentacionOperacion, despachoAduanal, fisicoMercancia].map(
          (img, index) => (
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
                my: { xs: 2, md: 0 },
              }}
            />
          )
        )}
      </Box>

      <Grid container spacing={4} sx={{ mt: 5, mb: 5, p: 2 }}>
        {/* Primer contenedor */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ px: { xs: 0, md: 0 }, mx: { xs: "auto", md: 0 } }}
        >
          <Box
            component="img"
            src={mundo}
            alt="mundo"
            sx={{
              width: "100%",
              height: { xs: 200, md: 350 },
              objectFit: "cover",
              borderRadius: 2,
              display: "block",
            }}
          />
        </Grid>
        {/* Segundo contenedor */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ maxWidth: "800px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#113a63",
                  mb: 2,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                {t("home_page.mundo_titulo")}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontWeight: "bold",
                  color: "#113a63",
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                }}
              >
                {t("home_page.mundo_subtitulo")}
              </Typography>
              <List sx={{ color: "#113a63", pl: { xs: 0, md: 2 } }}>
                <ListItem sx={{ p: 0 }}>
                  <ListItemIcon sx={{ minWidth: 24 }}>
                    <FiberManualRecordIcon
                      sx={{ fontSize: 20, color: "#fff" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={t("home_page.mundo_lista_1")} />
                </ListItem>
              </List>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: 3,
                  px: 3,
                  py: 1.5,
                  fontSize: "0.5 rem",
                  background: "#e85252",
                  mt: 2,
                }}
                onClick={() => navigate("/contacto")}
              >
                {t("home_page.mundo_boton")}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
