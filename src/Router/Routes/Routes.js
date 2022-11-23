import { createBrowserRouter } from "react-router-dom";
import AddCategories from "../../Dashboard/Categories/AddCategories";
import Categories from "../../Dashboard/Categories/Categories";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Dashboard/Products/AddProduct";
import AllUsers from "../../Dashboard/Users/AllUsers";
import DashboardLayout from "../../layouts/DashboardLayout";
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
import AdminRoute from "../AdminRoute/AdminRoute";
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
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <DashboardLayout></DashboardLayout>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-categories",
        element: (
          <AdminRoute>
            <Categories></Categories>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-categories",
        element: (
          <AdminRoute>
            <AddCategories></AddCategories>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
    ],
  },
]);
