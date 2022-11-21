import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Orders from "../../pages/Orders/Orders";
import Products from "../../pages/Products/Products/Products";
import Error from "../../pages/shared/Error/Error";
import ProductDetails from "../../pages/shared/ProductDetails/ProductDetails";
import Login from "../../pages/User/Login/Login";
import Profile from "../../pages/User/Profile/Profile";
import Register from "../../pages/User/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/product/:id",
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      { path: "*", element: <Error></Error> },
    ],
  },
]);
