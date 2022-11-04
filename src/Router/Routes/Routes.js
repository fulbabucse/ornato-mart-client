import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Products from "../../pages/Products/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "/category/:category",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/category/${params.category}`),
        element: <Products></Products>,
      },
      { path: "about", element: <About></About> },
    ],
  },
]);
