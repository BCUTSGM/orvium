import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import FlagIcon from "@mui/icons-material/Flag";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

export default function Nosotros() {
  const { t } = useTranslation();

  useEffect(() => {
    // SEO dinámico
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
    linkCanonical.href = "https://www.orvium.com/nosotros";
  }, [t]);

  const MotionCard = motion(Card);

  // Animación de entrada para las tarjetas
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
        backgroundColor: "#f7f9fc",
      }}
    >
      {/* Encabezado principal */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color="#113a63" gutterBottom>
            {t("nosotros_page.titulo_principal")}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {t("nosotros_page.subtitulo")}
          </Typography>
        </Box>
      </motion.div>

      {/* Descripción general */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Box sx={{ maxWidth: "900px", margin: "0 auto", mb: 8 }}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "justify",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              color: "#333",
            }}
          >
            {t("nosotros_page.descripcion")}
          </Typography>
        </Box>
      </motion.div>

      {/* Tarjetas de Misión, Visión y Valores */}
      <Grid container spacing={4} justifyContent="center">
        {/* Misión */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionCard
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            sx={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              py: 4,
            }}
          >
            <CardContent>
              <FlagIcon sx={{ fontSize: 50, color: "#1976d2", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" color="#113a63">
                {t("nosotros_page.mision.titulo")}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                {t("nosotros_page.mision.texto")}
              </Typography>
            </CardContent>
          </MotionCard>
        </Grid>

        {/* Visión */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionCard
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            sx={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              py: 4,
            }}
          >
            <CardContent>
              <VisibilityIcon sx={{ fontSize: 50, color: "#ff9800", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" color="#113a63">
                {t("nosotros_page.vision.titulo")}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
                {t("nosotros_page.vision.texto")}
              </Typography>
            </CardContent>
          </MotionCard>
        </Grid>

        {/* Valores */}
        <Grid item xs={12} sm={6} md={4}>
          <MotionCard
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            sx={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              py: 4,
            }}
          >
            <CardContent>
              <FavoriteIcon sx={{ fontSize: 50, color: "#e91e63", mb: 2 }} />
              <Typography variant="h5" fontWeight="bold" color="#113a63">
                {t("nosotros_page.valores.titulo")}
              </Typography>
              <List>
                {t("nosotros_page.valores.lista", { returnObjects: true }).map(
                  (valor, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        color: "#555",
                        textAlign: "center",
                        justifyContent: "center",
                        py: 0.5,
                      }}
                    >
                      • {valor}
                    </ListItem>
                  )
                )}
              </List>
            </CardContent>
          </MotionCard>
        </Grid>
      </Grid>

      {/* Equipo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ maxWidth: "900px", margin: "80px auto 0", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" color="#113a63" gutterBottom>
            {t("nosotros_page.equipo.titulo")}
          </Typography>
          <Typography variant="body1" color="#555" sx={{ fontSize: "1.1rem" }}>
            {t("nosotros_page.equipo.texto")}
          </Typography>
        </Box>
      </motion.div>

      {/* Objetivo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ maxWidth: "900px", margin: "60px auto 0", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" color="#113a63" gutterBottom>
            {t("nosotros_page.objetivo.titulo")}
          </Typography>
          <Typography variant="body1" color="#555" sx={{ fontSize: "1.1rem" }}>
            {t("nosotros_page.objetivo.texto")}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
