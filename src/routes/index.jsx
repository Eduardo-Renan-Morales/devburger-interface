import { createBrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import paths from "../constants/paths";
import { Admin } from "../containers/Admin";
import { Cart } from "../containers/Cart";
import { Home } from "../containers/Home";
import { Login } from "../containers/Login";
import { Menu } from "../containers/Menu";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([

  {
    path: '/',
    element:
      (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),

  },
  {
    path: '/login',
    element: <Login />,


  },
  {
    path: '/cadastro',
    element: <Register />,
  },

  {
    path: '/cardapio',
    element:
      (
        <>
          <Header />
          <Menu />,
        </>
      ),
  },
  {
    path: '/carrinho',
    element: (
      <>
        <Header />
        <Cart />,
      </>

    )
  },
  {
    path: paths.Order,
    element: <Admin />,
  },


  {
    path: paths.Products,
    element: <Admin />,
  },

  {
    path: paths.NewProducts,
    element: <Admin />,
  },

  {
    path: paths.EditProduct,
    element: <Admin />,
  },
])
