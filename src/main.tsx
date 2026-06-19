import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
//pages
import Home from "./pages/Home.tsx";
import Garden from "./pages/Garden.tsx";
import TreePage from "./pages/TreePage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { RouterProvider, createBrowserRouter } from "react-router";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/solo-rush-2",
        element: <Home />

      },
      {
        path: "/solo-rush-2/garden",
        element: <Garden />

      },
      {
        path: "/solo-rush-2/garden/:url",
        element: <TreePage />

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
