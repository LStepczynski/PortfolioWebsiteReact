import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Index } from './pages/index';
import { Projects } from "./pages/projects";

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
      element: <div>Hello world2!</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

