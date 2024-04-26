import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Root from "./Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/UserLogged/Login";
import Register from "./components/UserLogged/Register";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./Providers/AuthProvider";
import AddCraft from "./components/Craft/AddCraft";
import AllArtCraft from "./components/Craft/AllArtCraft";
import MyCraftList from "./components/Craft/MyCraftList";
import ViewDetails from "./components/Craft/ViewDetails";
import UpdateData from "./components/Craft/UpdateData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: <AddCraft></AddCraft>,
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch("http://localhost:5000/item"),
      },
      {
        path: "/myCraftList",
        element: <MyCraftList></MyCraftList>,
        loader: () => fetch("http://localhost:5000/item"),
      },
      {
        path: "/item/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/updateItem/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
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
