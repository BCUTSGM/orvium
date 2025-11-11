import { Outlet, Link } from "react-router-dom";
import { useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../../assets/orvium.png";
import ScrollToTop from "../scrollToTop"
import Translate from "../mainlayout/translate"
import { useTranslation } from "react-i18next";


export default function MainLayout() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = (
    <>
      <Button
        component={Link}
        to="/"
        color="inherit"
        onClick={toggleDrawer(false)}
      >
        {t('navbar.inicio')}
      </Button>

      <Button
        color="inherit"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon/>}
      >
        {t('navbar.servicios')}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          component={Link}
          to="/servicios/consultoria"
          onClick={() => {
            handleClose();
            toggleDrawer(false)();
          }}
        >
          {t('navbar.consultoria')}
        </MenuItem>
        <MenuItem
          component={Link}
          to="/servicios/asesoria"
          onClick={() => {
            handleClose();
            toggleDrawer(false)();
          }}
        >
          {t('navbar.asesoria')}
        </MenuItem>
        <MenuItem
          component={Link}
          to="/servicios/mentoria"
          onClick={() => {
            handleClose();
            toggleDrawer(false)();
          }}
        >
          {t('navbar.mentoria')}
        </MenuItem>
      </Menu>

      <Button
        component={Link}
        to="/nosotros"
        color="inherit"
        onClick={toggleDrawer(false)}
      >
        {t('navbar.nosotros')}
      </Button>
      {/* <Button
        component={Link}
        to="/blog"
        color="inherit"
        onClick={toggleDrawer(false)}
      >
        {t('navbar.blog')}
      </Button> */}
      <Button
        component={Link}
        to="/contacto"
        color="inherit"
        onClick={toggleDrawer(false)}
      >
        {t('navbar.contacto')}
      </Button>
    </>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(to right, #1e3662, #1f7a8b)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ maxHeight: 40, width: "auto" }}
          />

          {isMobile ? (
            <>
              {/* Menú hamburguesa en móviles */}
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    gap: 1,
                  }}
                  role="presentation"
                >
                  {menuItems}
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>{menuItems}</Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Body */}
      <Box component="main" sx={{ width: "100%", flex: 1 }}>
        <Translate/>
        <ScrollToTop />
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          py: 1,
          mt: "auto",
          backgroundImage: "linear-gradient(to right, #1e3662, #1f7a8b)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <List sx={{ p: 0 }}>
          <ListItem sx={{ p: 0, mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 50 }}>
              <PlayArrowIcon sx={{ color: "#fff", fontSize: 16 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" component="span">
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    {t('footer.corporativo')}
                    <br />
                  </Typography>
                  {t('footer.direccion_linea1')}
                  <br />
                  {t('footer.direccion_linea2')}
                </Typography>
              }
            />
          </ListItem>
        </List>

        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ maxHeight: 80, width: "auto", mt: { xs: 2, md: 0 } }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          backgroundImage: "linear-gradient(to right, #1e3662, #1f7a8b)",
          py: 1,
        }}
      >
        <a
          href="https://www.instagram.com/orvium.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ cursor: "pointer", color: "#fff" }} />
        </a>
        <a
          href="https://www.facebook.com/share/167rqPwK1F/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon sx={{ cursor: "pointer", color: "#fff" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/orvium.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ cursor: "pointer", color: "#fff" }} />
        </a>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          py: 1,
          backgroundImage: "linear-gradient(to right, #1e3662, #1f7a8b)",
          color: "#fff",
          fontSize: 12,
        }}
      >
        {t('footer.copyright')}
      </Box>
    </Box>
  );
}
