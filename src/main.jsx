import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AddProduct from "./components/Navbar/AddProduct";
import MyCart from "./components/Navbar/MyCart";
import Login from "./components/Navbar/Login";
import Register from "./components/Navbar/Register";
import ErrorPage from "./components/Navbar/ErrorPage";
import Slider from "./components/Slider/Slider";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import UpdateProduct from "./components/Slider/UpdateProduct";
import ShowDetails from "./components/Slider/ShowDetails";
import PrivateRout from "./components/PrivateRout/PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRout>
            <AddProduct></AddProduct>
          </PrivateRout>
        ),
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRout>
            <MyCart></MyCart>
          </PrivateRout>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        // path: `/slider:/id`,
        path: `/slider/:brand`,
        element: <Slider></Slider>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: `/updateProduct/:id`,
        element: (
          <PrivateRout>
            <UpdateProduct></UpdateProduct>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-wine.vercel.app/product/${params.id}`
          ),
      },
      {
        path: `/showDetails/:id`,
        element: (
          <PrivateRout>
            <ShowDetails></ShowDetails>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment10-server-wine.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
