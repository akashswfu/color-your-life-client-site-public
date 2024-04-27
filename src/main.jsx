import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Root from "./Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/UserLogged/Login";
import Register from "./components/UserLogged/Register";
import AuthProvider from "./Providers/AuthProvider";
import AddCraft from "./components/Craft/AddCraft";
import AllArtCraft from "./components/Craft/AllArtCraft";
import MyCraftList from "./components/Craft/MyCraftList";
import ViewDetails from "./components/Craft/ViewDetails";
import UpdateData from "./components/Craft/UpdateData";
import Addcategory from "./components/Addcategory";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllSubCategory from "./components/Home/AllSubCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/item"),
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
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch("http://localhost:5000/item"),
      },
      {
        path: "/myCraftList/:email",
        element: (
          <PrivateRoute>
            <MyCraftList></MyCraftList>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/emailItem/${params.email}`),
      },
      {
        path: "/item/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateData></UpdateData>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/addCategory",
        element: (
          <PrivateRoute>
            {" "}
            <Addcategory></Addcategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/allCategory/:subcategory",
        element: <AllSubCategory></AllSubCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allCategory/${params.subcategory}`),
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
