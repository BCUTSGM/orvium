import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainlayout/mainLayout";
import Home from "./views/home";
import Nosotros from "./views/nosotros"
import Contacto from "./views/contacto";
import Blog from "./views/blog";

import Maritimo from "./views/servicios/maritimo";
import Aereo from "./views/servicios/aereo";
import Terrestre from "./views/servicios/terrestre";
import Test from "./views/test";

import BlogDetalle from "./views/noticias/blogDetalle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/servicios/maritimo",
        element: <Maritimo />,
      },
      {
        path: "/servicios/terrestre",
        element: <Terrestre />,
      },
      {
        path: "/servicios/aereo",
        element: <Aereo />,
      },
      {
        path: "/contacto",
        element: <Contacto />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/detalle/:id",
        element: <BlogDetalle />,
      },
    ],
  },
]);

export default router;
