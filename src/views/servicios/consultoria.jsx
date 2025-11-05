import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
      {/* Encabezado */}
      <Box
        sx={{
          backgroundColor:"#1f7a8b",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
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
          }}
        >
          {t("consultoria_page.titulo_principal")}
        </Typography>
      </Box>

      {/* Descripción general */}
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

        {/* Diagnóstico */}
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

        <List sx={{ pl: { xs: 2, md: 6 } }}>
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
                primary={`• ${t(`consultoria_page.diagnostico.analisis.${key}`)}`}
              />
            </ListItem>
          ))}
        </List>

        {/* Estrategias */}
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

        <List sx={{ pl: { xs: 2, md: 6 } }}>
          {t("consultoria_page.estrategias.puntos", { returnObjects: true }).map(
            (punto, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    textAlign: "justify",
                  }}
                  primary={`• ${punto}`}
                />
              </ListItem>
            )
          )}
        </List>

        {/* Botón de contacto */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 3,
              px: { xs: 3, md: 4 },
              py: { xs: 1.2, md: 1.5 },
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              background: "#1f7a8b",
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
