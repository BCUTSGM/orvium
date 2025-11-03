import Imagen from "../assets/noticias/imagen.png";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import Noticias from "./noticias/noticias";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("blog_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("blog_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.cslogix.com/blog";
  }, [t]);

  return (
    <Box>
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
          {t("blog_page.titulo_principal")}
        </Typography>
      </Box>

      {/* Noticias generales */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", mt: 6, textAlign: "center" }} >
        {t("blog_page.seccion_ultimas_noticias")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/noticias"} />

      {/* Comercio Internacional */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_comercio_internacional")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/comercioInternacional"} />

      {/* Exportacion */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_exportacion")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/exportacion"} />

      {/* Importación */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_importacion")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/importacion"} />

      {/* Logistica */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_logistica")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/logistica"} />

      {/* México */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_mexico")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/mexico"} />

      {/* Puertos */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_puertos")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/puertos"} />

      {/* Tecnologia */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_tecnologia")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/tecnologia"} />

      {/* Transporte */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#113a63", textAlign: "center" }} >
        {t("blog_page.seccion_transporte")}
      </Typography>
      <Noticias fetchLink={"https://cslogixapiblog.netlify.app/.netlify/functions/transporte"} />

    </Box>
  );
}
