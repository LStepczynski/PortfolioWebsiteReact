import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Index } from './pages/index';
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";

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
      path: "/skills",
      element: <Skills />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

