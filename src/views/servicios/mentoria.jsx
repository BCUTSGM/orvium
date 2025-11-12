import { Box, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Imagen from "../../assets/Mentoria/Portada mentoria.png";
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
    linkCanonical.href = "https://orvium.com.mx/servicios/mentoria";
  }, [t]);

  // 🔹 Nuevo renderList con colores oficiales Orvium
  const renderList = (items, color) => (
    <ul style={{ marginLeft: 0, paddingLeft: 0, listStyle: "none" }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.6rem",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: color,
              display: "inline-block",
              marginRight: "10px",
              flexShrink: 0,
            }}
          ></span>
          <span style={{ opacity: 0.9 }}>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Box>
      {/* Encabezado */}
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
            textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
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

      {/* Sección de Programas */}
      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 2, md: 8 },
          py: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Tarjeta Aceleramiento */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "20px",
              color: "white",
              background: "linear-gradient(135deg, #1e3662 0%, #1f7a8b 100%)",
              boxShadow: "0 12px 30px rgba(30, 54, 98, 0.4)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(31, 122, 139, 0.6)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 3,
                  textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
                }}
              >
                {t("mentoria_page.programa_aceleramiento.titulo")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  textAlign: "justify",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                {t("mentoria_page.programa_aceleramiento.objetivo")}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Modelo:
              </Typography>
              {renderList(
                t("mentoria_page.programa_aceleramiento.modelo", {
                  returnObjects: true,
                }),
                "#2cb4b4" // Turquesa
              )}

              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                Resultados esperados:
              </Typography>
              {renderList(
                t("mentoria_page.programa_aceleramiento.resultados", {
                  returnObjects: true,
                }),
                "#b3d1ff" // Azul claro
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta Incubación */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              borderRadius: "20px",
              color: "white",
              background: "linear-gradient(135deg, #1f7a8b 0%, #2cb4b4 100%)",
              boxShadow: "0 12px 30px rgba(31,122,139,0.4)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 20px 40px rgba(44,180,180,0.6)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 3,
                  textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
                }}
              >
                {t("mentoria_page.programa_incubacion.titulo")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  textAlign: "justify",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                {t("mentoria_page.programa_incubacion.descripcion")}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Modelo:
              </Typography>
              {renderList(
                t("mentoria_page.programa_incubacion.modelo", {
                  returnObjects: true,
                }),
                "#1e3662" // Azul oscuro
              )}

              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3 }}>
                Resultados esperados:
              </Typography>
              {renderList(
                t("mentoria_page.programa_incubacion.resultados", {
                  returnObjects: true,
                }),
                "#1f7a8b" // Azul petróleo
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Botón de contacto */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 8 }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            px: { xs: 3, md: 4 },
            py: { xs: 1.2, md: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
            background: "linear-gradient(90deg, #1f7a8b 0%, #2cb4b4 100%)",
            boxShadow: "0 8px 20px rgba(31,122,139,0.4)",
            "&:hover": {
              background: "linear-gradient(90deg, #1e3662 0%, #1f7a8b 100%)",
            },
          }}
          onClick={() => navigate("/contacto")}
        >
          {t("global.boton_contacto", "Contáctanos")}
        </Button>
      </Box>

    </Box>
  );
}
