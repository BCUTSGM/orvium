import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Imagen from "../../assets/Asesoria/Portada asesoria.png";
import { useTranslation } from "react-i18next";

export default function Asesoria() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("asesoria_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("asesoria_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.orvium.com/servicios/asesoria";
  }, [t]);

  return (
    <Box>
      {/* Encabezado principal */}
      <Box
        sx={{
          backgroundImage: `url(${Imagen})`,
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
          {t("asesoria_page.titulo_principal")}
        </Typography>
      </Box>

      {/* Sección principal */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4, textAlign: "justify" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {t("asesoria_page.subtitulo")}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#333",
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
          }}
        >
          {t("asesoria_page.descripcion_general")}
        </Typography>

        {/* Servicios */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            mt: 6,
            mb: 3,
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
          }}
        >
          {t("asesoria_page.servicios.titulo")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            textAlign: "center",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          {t("asesoria_page.servicios.descripcion")}
        </Typography>

        <Box sx={{ pl: { xs: 2, md: 6 }, pr: { xs: 2, md: 6 } }}>
          <ul style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
            <li>
              {t(
                "asesoria_page.servicios.listado.empresas_clientes_proveedores"
              )}
            </li>
            <li>{t("asesoria_page.servicios.listado.directorio_empresas")}</li>
            <li>{t("asesoria_page.servicios.listado.primer_contacto")}</li>
            <li>
              {t("asesoria_page.servicios.listado.representacion_comercial")}
            </li>
            <li>{t("asesoria_page.servicios.listado.acompanamiento")}</li>
          </ul>
        </Box>

        {/* Valores agregados */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mt: 8,
            mb: 3,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
          }}
        >
          {t("asesoria_page.valores_agregados.titulo")}
        </Typography>

        <Box sx={{ pl: { xs: 2, md: 6 }, pr: { xs: 2, md: 6 } }}>
          <ul style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
            {t("asesoria_page.valores_agregados.puntos", {
              returnObjects: true,
            }).map((punto, index) => (
              <li key={index}>{punto}</li>
            ))}
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
    </Box>
  );
}
