import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";
import ForgotPassword from "./pages/forgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);

export default router;
