import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ModalContainer from "./components/modal/modal-container";
import ToastContainer from "./components/toast/toast.container";
import "./styles/app.scss";
import Loading from "@core/components/loading";
import StorageService from "@core/services/storage";
import { ACCESS_TOKEN_KEY } from "./constants";
import { useEffect } from "react";
import HttpService from "@core/services/http/http.service";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";
import { guardRoutes } from "@core/helpers/component.helper";
import { routes } from "./router";
import NotFound from "./pages/not-found/_index";
import { useDispatch } from "react-redux";
import AuthService from "./services/http/auth.service";
import { storeUser } from "./store/auth/auth.action";
import useObservable from "@core/hooks/use-observable.hook";
import { clearAllToast } from "./components/toast/toast.service";

function App() {
  const dispatch = useDispatch();
  const { subscribeOnce } = useObservable();

  useEffect(() => {
    const token = HttpService.getAccessToken() || "";

    StorageService.set(ACCESS_TOKEN_KEY, token);
    subscribeOnce(AuthService.validate(token), (response) => {
      dispatch(
        storeUser({ user: response.user, accessToken: response.accessToken })
      );
      StorageService.set(ACCESS_TOKEN_KEY, response.accessToken);
      clearAllToast();
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {guardRoutes(routes, "MEMBER")}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div id="toast-root">
        <ToastContainer />
      </div>
      <div id="modal-root">
        <ModalContainer />
      </div>
      <div id="loading-root">
        <Loading />
      </div>
    </>
  );
}

export default App;
