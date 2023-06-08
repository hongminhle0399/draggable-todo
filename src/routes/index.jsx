import About from "../pages/about";
import Home from "../pages/home";

// baseUrl
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
