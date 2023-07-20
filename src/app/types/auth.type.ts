export interface LoginInitialValues {
  username: string;
  password: string;
}

export interface LoginResponse {
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

export interface SignUpInitialValues {
  username: string;
  password: string;
  confirmPassword: string;
  phone: string;
  passwordWallet: string;
  bankNumber: string;
  bankName: string;
  bankOwn: string;
}

export interface SignUpRequest {
  username: string;
  password: string;
  password_wallet: string;
  phone: string;
  bank_number: string;
  bank_name: string;
  bank_own: string;
}
