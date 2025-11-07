import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Imagen from "../../assets/Consultoria/Portada Consultoria.png";
import Imagen2 from "../../assets/Consultoria/Importacion y exportacion.png";
import viñeta from "../../assets/Viñeta2.png";

export default function Consultoria() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("consultoria_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("consultoria_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.orvium.com/servicios/consultoria";
  }, [t]);

  return (
    <Box>
      {/* ENCABEZADO */}
      <Box
        sx={{
          backgroundImage: `url(${Imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: { xs: "60vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 4,
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          color="white"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
            px: 2,
          }}
        >
          {t("consultoria_page.titulo_principal")}
        </Typography>
      </Box>

      {/* DESCRIPCIÓN GENERAL */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4, textAlign: "justify" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {t("consultoria_page.subtitulo")}
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            mb: 6,
            textAlign: "justify",
          }}
        >
          {t("consultoria_page.descripcion_general")}
        </Typography>

        {/* DIAGNÓSTICO */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mt: 8,
            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
          }}
        >
          {t("consultoria_page.diagnostico.titulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
            mb: 4,
            textAlign: "justify",
          }}
        >
          {t("consultoria_page.diagnostico.descripcion")}
        </Typography>

        <List sx={{ pl: { xs: 1, md: 6 } }}>
          {[
            "producto",
            "mercado",
            "capacidad_produccion",
            "organizacion_administrativa_tecnologica",
            "cadena_distribucion",
            "finanzas",
            "alianzas_estrategicas",
            "viabilidad_tecnica_financiera",
          ].map((key, index) => (
            <ListItem key={index} sx={{ py: 0.5 }}>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  textAlign: "justify",
                }}
                primary={`• ${t(
                  `consultoria_page.diagnostico.analisis.${key}`
                )}`}
              />
            </ListItem>
          ))}
        </List>

        {/* ESTRATEGIAS */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mt: 8,
            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
          }}
        >
          {t("consultoria_page.estrategias.titulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
            mb: 4,
            textAlign: "justify",
          }}
        >
          {t("consultoria_page.estrategias.descripcion")}
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            overflow: "hidden",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={Imagen2}
              alt="Imagen consultoría"
              sx={{
                width: { xs: "90%", sm: "85%", md: "100%" },
                height: { xs: 240, sm: 300, md: 380 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "justify",
              pr: { xs: 0, md: 3 },
            }}
          >
            <List
              sx={{
                pl: { xs: 1, sm: 2 },
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              {t("consultoria_page.estrategias.puntos", {
                returnObjects: true,
              }).map((punto, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: { xs: 0.3, sm: 0.6 },
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1, sm: 1.5 },
                  }}
                >
                  <Box
                    component="img"
                    src={viñeta}
                    alt="icono"
                    sx={{
                      width: { xs: 14, sm: 20, md: 24 },
                      height: "auto",
                      mt: { xs: "3px", lg: "4px" },
                    }}
                  />
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1rem",
                        md: "1.1rem",
                      },
                      lineHeight: 1.5,
                      textAlign: "justify",
                    }}
                    primary={punto}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              background: "#1f7a8b",
              "&:hover": {
                background: "#16606d",
              },
            }}
            onClick={() => navigate("/contacto")}
          >
            {t("boton_contacto", "Contáctanos")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
