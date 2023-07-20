import ForgotPassword from "./pages/forgotPassword";
import { RouteGuardShape } from "@core/types/route.type";

export const routes: RouteGuardShape[] = [
  {
    path: "/forgot-password",
    component: ForgotPassword,
    config: {
      roles: ["ADMIN", "MEMBER"],
      redirect: "/login",
    },
  },
];
