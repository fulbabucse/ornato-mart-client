import { createBrowserRouter } from "react-router-dom";
import AddCategories from "../../Dashboard/Categories/AddCategories";
import Categories from "../../Dashboard/Categories/Categories";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Dashboard/Products/AddProduct";
import AllUsers from "../../Dashboard/Users/AllUsers";
import DashboardLayout from "../../layouts/DashboardLayout";
import Root from "../../layouts/Root";
import Home from "../../pages/Home/Home/Home";
import CategoryProducts from "../../pages/Home/Products/CategoryProducts";
import Orders from "../../pages/Orders/Orders";
import Category from "../../pages/shared/Category/Category";
import Error from "../../pages/shared/Error/Error";
import ProductDetails from "../../pages/shared/ProductDetails/ProductDetails";
import Shop from "../../pages/shared/Shop/Shop";
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
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/shop/:shopName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sellers/${params.shopName}`),
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/sub-category/:categoryName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sub_category/${params.categoryName}`),
        element: <CategoryProducts></CategoryProducts>,
      },
      {
        path: "/category/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
        element: <Category></Category>,
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
