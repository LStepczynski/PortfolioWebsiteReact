import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Index } from './pages/index';

export const Routes = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/test",
      element: <div>Hello world2!</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

