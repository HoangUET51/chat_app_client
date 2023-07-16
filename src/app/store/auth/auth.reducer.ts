import { AppAction } from "@core/types/redux.type";
import { AuthActionType, AuthState } from "./auth.type";

export default function authReducer(
  state = initialState,
  action: AppAction
): AuthState {
  switch (action.type) {
    case AuthActionType.STORE_AUTH:
      return {
        ...state,
        user: action.payload?.user,
        accessToken: action.payload?.accessToken,
      };
    case AuthActionType.CLEAR_AUTH:
      return initialState;
    default:
      return state;
  }
}

const initialState: AuthState = {
  user: {
    _id: "",
    email: "",
    fullName: "",
    avatar: "",
    address: "",
    gender: "",
    phone: "",
  },
  accessToken: "",
};
