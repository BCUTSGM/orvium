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
    linkCanonical.href = "https://www.cslogix.com/contacto";
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
        "service_zg48ip8",
        "template_0r3zs8w",
        form.current,
        "pUoH9hfiE5Guw5wmR"
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
        {/* Formulario */}
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
                  bgcolor: isFormValid && !loading ? "#e85252" : "#ccc",
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

        {/* Información + Mapa */}
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, alignItems: "stretch" }}
        >
          {/* Información de contacto */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: "#f4f4f4",
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: { md: "1px solid #e0e0e0" },
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t("contacto_page.titulo_llamanos")}
              </Typography>
              <Typography variant="body1">+52 55 6075 1740</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t("contacto_page.titulo_correo")}
              </Typography>
              <Typography variant="body1">contacto@cslogix.com</Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t("contacto_page.titulo_localizacion")}
              </Typography>
              <Typography variant="body1">
                {t("contacto_page.direccion_linea1")} <br />
                {t("contacto_page.direccion_linea2")}
              </Typography>
            </Box>

            <Box width="100%" mt={4}>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                textAlign="center"
              >
                {t("contacto_page.titulo_servicios")}
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <ListItem sx={{ justifyContent: "center" }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <BusinessCenterIcon color="primary" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={t("contacto_page.servicio_consultoria")} />
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
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
                height: "100%",
                minHeight: { xs: 320, md: 520 },
                maxWidth: 1000,
              }}
            >
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.3527129928409!2d-98.22231567419021!3d19.131323746318387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc5e64e325e41%3A0x67ddf5e355a4a93e!2scslogix!5e0!3m2!1ses-419!2smx!4v1756934263419!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
