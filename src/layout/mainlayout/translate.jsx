import React, { useState, useMemo } from "react";
import { Fab, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function Translate() {
  // El hook de i18next maneja el estado del idioma.
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  // Lista de idiomas que tu app soporta.
  // Asegúrate de tener un archivo JSON correspondiente para cada uno.
  const idiomas = useMemo(
    () => [
      // { code: "ar", label: "العربية (Árabe)" },
      // { code: "az", label: "Azərbaycan dili (Azerí)" },
      // { code: "bg", label: "Български (Búlgaro)" },
      // { code: "bn", label: "বাংলা (Bengalí)" },
      // { code: "ca", label: "Català (Catalán)" },
      // { code: "cs", label: "Čeština (Checo)" },
      // { code: "da", label: "Dansk (Danés)" },
      // { code: "de", label: "Deutsch (Alemán)" },
      // { code: "el", label: "Ελληνικά (Griego)" },
      // { code: "en", label: "English (Inglés)" },
      // { code: "eo", label: "Esperanto" },
      { code: "es", label: "Español" },
      // { code: "et", label: "Eesti (Estonio)" },
      // { code: "eu", label: "Euskara (Vasco)" },
      // { code: "fa", label: "فارسی (Persa)" },
      // { code: "fi", label: "Suomi (Finés)" },
      // { code: "fr", label: "Français (Francés)" },
      // { code: "ga", label: "Gaeilge (Irlandés)" },
      // { code: "gl", label: "Galego (Gallego)" },
      // { code: "he", label: "עברית (Hebreo)" },
      // { code: "hi", label: "हिन्दी (Hindi)" },
      // { code: "hu", label: "Magyar (Húngaro)" },
      // { code: "id", label: "Bahasa Indonesia" },
      // { code: "it", label: "Italiano" },
      // { code: "ja", label: "日本語 (Japonés)" },
      // { code: "ko", label: "한국어 (Coreano)" },
      // { code: "ky", label: "Кыргызча (Kirguís)" },
      // { code: "lt", label: "Lietuvių (Lituano)" },
      // { code: "lv", label: "Latviešu (Letón)" },
      // { code: "ms", label: "Bahasa Melayu (Malayo)" },
      // { code: "nb", label: "Norsk Bokmål (Noruego)" },
      // { code: "nl", label: "Nederlands (Holandés)" },
      // { code: "pl", label: "Polski (Polaco)" },
      // { code: "pt", label: "Português (Portugués)" },
      // { code: "pt-BR", label: "Português (Brasil)" },
      // { code: "ro", label: "Română (Rumano)" },
      // { code: "ru", label: "Русский (Ruso)" },
      // { code: "sk", label: "Slovenčina (Eslovaco)" },
      // { code: "sl", label: "Slovenščina (Esloveno)" },
      // { code: "sq", label: "Shqip (Albanés)" },
      // { code: "sv", label: "Svenska (Sueco)" },
      // { code: "th", label: "ไทย (Tailandés)" },
      // { code: "tl", label: "Tagalog (Filipino)" },
      // { code: "tr", label: "Türkçe (Turco)" },
      // { code: "uk", label: "Українська (Ucraniano)" },
      // { code: "ur", label: "اردو (Urdu)" },
      // { code: "zh-Hans", label: "简体中文 (Chino Simplificado)" },
      // { code: "zh-Hant", label: "繁體中文 (Chino Tradicional)" },
    ],
    []
  );

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Esta función ahora es mucho más simple.
  // Solo le dice a i18next que cambie el idioma.
  const cambiarIdioma = (codigoIdioma) => {
    i18n.changeLanguage(codigoIdioma);
    handleClose();
  };

  return (
    <>
      <Fab
        color="primary"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          background: "linear-gradient(to right, #16606d, #1f7a8b)",
          color: "#fff",
          zIndex: 9999,
          bottom: { xs: 110, md: 110 },
          right: { xs: 27, md: 27 },
        }}
        aria-label="Cambiar idioma"
      >
        <LanguageIcon />
      </Fab>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ zIndex: 10000 }}
      >
        {idiomas.map((idioma) => (
          <MenuItem
            key={idioma.code}
            selected={i18n.language === idioma.code}
            onClick={() => cambiarIdioma(idioma.code)}
            sx={{
              "&.Mui-selected": {
                background:
                  "linear-gradient(90deg, rgba(30, 54, 98, 1) 0%, rgba(31, 122, 139, 1) 100%)",
                color: "#fff",
              },
              "&.Mui-selected:hover": {
                background:
                  "linear-gradient(90deg, rgba(26, 46, 85, 1) 0%, rgba(27, 110, 125, 1) 100%)",
              },
            }}
          >
            {idioma.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
