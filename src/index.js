import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./newpages/HomePage";
import Profile from "./newpages/Profiles";
import Layout from "./components/Layout";
import Contacts from "./newpages/Contacts";
import Animation from "./newpages/Animation";
import Serials from "./newpages/Serials";
import Film from "./newpages/Film";
import Catalog from "./newpages/Catalog";
import Clients from "./newpages/Clients";
import Planet from "./newpages/Planet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "profile/:id",
        element: <Profile></Profile>,
      },
      {
        path: "animation",
        element: <Animation></Animation>,
        children: [
          {
            path: "serials",
            element: <Serials></Serials>,
          },
          {
            path: "film",
            element: <Film></Film>,
          },
          {
            path: "catalog",
            element: <Catalog></Catalog>,
          },
        ],
      },
      {
        path: "clients",
        element: <Clients></Clients>,
      },
      { path: "planet", element: <Planet></Planet> },
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "main",
        element: <HomePage></HomePage>,
      },
      {
        path: "contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
