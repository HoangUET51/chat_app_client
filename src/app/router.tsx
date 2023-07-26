import { RouteGuardShape } from "@core/types/route.type";
import ForgotPassword from "./pages/forgot-password";
import Messenger from "./pages/messenger";

export const routes: RouteGuardShape[] = [
  {
    path: "/forgot-password",
    component: ForgotPassword,
    config: {
      roles: ["ADMIN", "MEMBER"],
      redirect: "/login",
    },
  },
  {
    path: "/messenger",
    component: Messenger,
    config: {
      roles: ["ADMIN", "MEMBER"],
      redirect: "/login",
    },
  },
];
