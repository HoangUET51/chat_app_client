export interface AuthState {
  user: {
    _id: string;
    email: string;
    fullName: string;
    avatar: string;
    address: string;
    gender: string;
    phone: string;
  };
  accessToken: string;
}

export enum AuthActionType {
  STORE_AUTH = "auth/storeAuth",
  CLEAR_AUTH = "auth/clearAuth",
}
