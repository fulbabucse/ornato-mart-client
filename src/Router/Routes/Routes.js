import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import ProductDetails from "../../pages/Products/ProductDetails/ProductDetails";
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
      {
        path: "/category/product/:id",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      { path: "about", element: <About></About> },
    ],
  },
]);
