import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Main } from "./main/Main";
import { Initial } from "./init/Initial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Initial />
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

export const Routing = () => {
  return (
    <RouterProvider router={router} />
  );
};
