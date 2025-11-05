import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Mentoria() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("mentoria_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("mentoria_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.cslogix.com/servicios/mentoria";
  }, [t]);

  return (
    <Box>
      {/* Encabezado */}
      <Box
        sx={{
          backgroundColor: "#113a63",
          width: "100vw",
          height: { xs: "50vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          {t("mentoria_page.titulo_principal")}
        </Typography>
      </Box>

      {/* Descripción inicial */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, textAlign: "justify" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {t("mentoria_page.subtitulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mb: 6 }}
        >
          {t("mentoria_page.descripcion")}
        </Typography>
      </Box>

      {/* Programa de Aceleramiento */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            mb: 2,
            textAlign: "center",
          }}
        >
          {t("mentoria_page.programa_aceleramiento.titulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "justify", fontSize: { xs: "1rem", md: "1.1rem" } }}
        >
          {t("mentoria_page.programa_aceleramiento.objetivo")}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#113a63", mb: 1 }}
        >
          Modelo:
        </Typography>
        <ul style={{ marginLeft: "1.5rem" }}>
          {t("mentoria_page.programa_aceleramiento.modelo", { returnObjects: true }).map(
            (item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            )
          )}
        </ul>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#113a63", mt: 3 }}
        >
          Resultados esperados:
        </Typography>
        <ul style={{ marginLeft: "1.5rem" }}>
          {t("mentoria_page.programa_aceleramiento.resultados", { returnObjects: true }).map(
            (item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            )
          )}
        </ul>
      </Box>

      {/* Programa de Incubación */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            mb: 2,
            textAlign: "center",
          }}
        >
          {t("mentoria_page.programa_incubacion.titulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "justify", fontSize: { xs: "1rem", md: "1.1rem" } }}
        >
          {t("mentoria_page.programa_incubacion.descripcion")}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#113a63", mb: 1 }}
        >
          Modelo:
        </Typography>
        <ul style={{ marginLeft: "1.5rem" }}>
          {t("mentoria_page.programa_incubacion.modelo", { returnObjects: true }).map(
            (item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            )
          )}
        </ul>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#113a63", mt: 3 }}
        >
          Resultados esperados:
        </Typography>
        <ul style={{ marginLeft: "1.5rem" }}>
          {t("mentoria_page.programa_incubacion.resultados", { returnObjects: true }).map(
            (item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item}
              </li>
            )
          )}
        </ul>
      </Box>

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
          {t("global.boton_contacto", "Contáctanos")}
        </Button>
      </Box>
    </Box>
  );
}
