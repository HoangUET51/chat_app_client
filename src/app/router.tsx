import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign_in";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
]);

export default router;
