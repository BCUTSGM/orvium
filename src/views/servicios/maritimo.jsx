import { Box, Typography, Button } from "@mui/material";
import fondo from "../../assets/maritimo/maritimo.png";
import Maritimo1 from "../../assets/maritimo/maritimo-1.png";
import Maritimo2 from "../../assets/maritimo/maritimo-2.png";
import MaritimoHover from "../../assets/maritimo/maritimohover.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function Maritimo() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = t("maritimo_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("maritimo_page.meta_descripcion");
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.cslogix.com/servicios/maritimo";
  }, [t]);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${fondo})`,
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
          {t("maritimo_page.titulo_principal")}
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, py: 4, textAlign: "justify" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }
          }}
        >
          {t("maritimo_page.subtitulo")}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }
          }}
        >
          {t("maritimo_page.garantia")}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, mb: 6 }}>
          <span style={{ fontWeight: "bold" }}>
            {t("maritimo_page.parrafo_pregunta")}
          </span>{" "}
          {t("maritimo_page.parrafo_respuesta")}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mt: 8,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }
          }}
        >
          {t("maritimo_page.titulo_ofrecemos")}
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
      {[Maritimo1, Maritimo2].map((img, index) => (
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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            background: "#e85252",
          }}
          onClick={() => navigate("/contacto")}
        >
          {t("maritimo_page.boton_cotizar")}
        </Button>
      </Box>

      <Box sx={{ padding: 4, textAlign: "justify", px: { xs: 2, md: 8 }, py: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#113a63",
            textAlign: "center",
            mt: 4,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          {t("maritimo_page.frase_final")}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${MaritimoHover})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: { xs: "20vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2
        }}
      ></Box>
    </Box>
  );
}