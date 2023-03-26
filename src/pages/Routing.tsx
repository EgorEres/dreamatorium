import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Main } from "./main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export const Routing = () => {
  return (
    <RouterProvider router={router} />
  );
};
