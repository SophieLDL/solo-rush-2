import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
//pages
import Home from "./pages/Home.tsx";
import Garden from "./pages/Garden.tsx";
import TreesDetails from "./pages/TreesDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />

      },
      {
        path: "/garden",
        element: <Garden />

      },
      {
        path: "/garden/:url",
        element: <TreesDetails />

      },
      {
        path: "*",
        element: <NotFound />

      },
    ]
  }
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document must contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <RouterProvider router={router} />
);
