import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainlayout/mainLayout";
import Home from "./views/home";
import Nosotros from "./views/nosotros"
import Contacto from "./views/contacto";
import Blog from "./views/blog";

import Asesoria from "./views/servicios/asesoria";
import Consultoria from "./views/servicios/consultoria";
import Mentoria from "./views/servicios/mentoria";
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
        path: "/servicios/asesoria",
        element: <Asesoria />,
      },
      {
        path: "/servicios/consultoria",
        element: <Consultoria />,
      },
      {
        path: "/servicios/mentoria",
        element: <Mentoria />,
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
