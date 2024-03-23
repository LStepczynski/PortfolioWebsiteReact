import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Index } from './pages/index';
import { Projects } from "./pages/projects";
import { Resume } from "./pages/resume";

export const Routes = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

