import {
  Box,
  Typography,
  Grid,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("contacto_page.meta_titulo");

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("contacto_page.meta_descripcion");

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://orvium.com.mx/contacto";
  }, [t]);

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.business.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    emailjs
      .sendForm(
        "service_rb88s7i",
        "template_h99qgnn",
        form.current,
        "wooFand_G6-wVwwzB"
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Mensaje enviado con éxito");
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            business: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          alert("❌ Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f9f9f9",
        p: 5,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          direction={{ xs: "column" }}
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: { md: "1px solid #e0e0e0" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#113a63",
                textAlign: "center",
              }}
            >
              {t("contacto_page.titulo_formulario")}
            </Typography>

            <Box component="form" ref={form} onSubmit={sendEmail} noValidate>
              <TextField
                fullWidth
                margin="normal"
                label={t("contacto_page.campo_nombre")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label={t("contacto_page.campo_email")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label={t("contacto_page.campo_empresa")}
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin="normal"
                label={t("contacto_page.campo_mensaje")}
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {!isFormValid && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  {t("contacto_page.error_campos_vacios")}
                </Typography>
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!isFormValid || loading}
                sx={{
                  mt: 2,
                  bgcolor: isFormValid && !loading ? "#1f7a8b" : "#ccc",
                  borderRadius: 2,
                  py: 1.5,
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  t("contacto_page.boton_enviar")
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            alignItems: "stretch",
            width: "100vw", 
            margin: 0,
            padding: 0,
            position: "relative",
            left: "50%",
            right: "50%",
            transform: "translateX(-50%)", 
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: "#f4f4f4",
              p: { xs: 3, md: 6 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                textAlign: { xs: "center", md: "left" },
                gap: { xs: 3, md: 6 },
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t("contacto_page.titulo_llamanos")}
                </Typography>
                <Typography variant="body1">+52 222 156 0064</Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t("contacto_page.titulo_correo")}
                </Typography>
                <Typography variant="body1">contacto@orvium.com.mx</Typography>
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t("contacto_page.titulo_localizacion")}
                </Typography>
                <Typography variant="body1">
                  {t("contacto_page.direccion_linea1")} <br />
                  {t("contacto_page.direccion_linea2")}
                </Typography>
              </Box>

              <Box sx={{ mt: { xs: 2, md: 0 }, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t("contacto_page.titulo_servicios")}
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm={4}>
                    <ListItem sx={{ justifyContent: "center" }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <BusinessCenterIcon color="primary" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText
                        primary={t("contacto_page.servicio_consultoria")}
                      />
                    </ListItem>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <ListItem sx={{ justifyContent: "center" }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <SchoolIcon color="primary" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={t("contacto_page.servicio_asesoria")} />
                    </ListItem>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <ListItem sx={{ justifyContent: "center" }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <LightbulbIcon color="primary" fontSize="large" />
                      </ListItemIcon>
                      <ListItemText primary={t("contacto_page.servicio_mentoria")} />
                    </ListItem>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </Box>
  );
}
