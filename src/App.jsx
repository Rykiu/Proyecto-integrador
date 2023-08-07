import "./styles.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Store from "./components/Store/Store";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const rutas = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/acerca", element: <About /> },
  { path: "/contacto", element: <Contact /> },
  { path: "/tienda", element: <Store /> },
  { path: "/tienda/:buscar", element: <Store /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={rutas} />
      <Footer />
    </>
  );
}
export default App;
