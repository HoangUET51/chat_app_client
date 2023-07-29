import HttpService from "@core/services/http/http.service";
import { LoginResponse, SignUpRequest } from "@app/types";

class _AuthService {
  public login(email: string, password: string) {
    return HttpService.post<LoginResponse>("/login", {
      body: {
        email,
        password,
      },
    });
  }

  public signUp(signUpRequest: SignUpRequest) {
    return HttpService.post<LoginResponse>("/accounts", {
      body: { ...signUpRequest },
    });
  }

  public validate(token: string) {
    return HttpService.post<LoginResponse>(`/auth/validate?token=${token}`);
  }

  public getChatApp(userIds: string[]) {
    return HttpService.post<any>("/chat/chat-room", {
      body: { userIds: [...userIds] },
    });
  }
}

const AuthService = new _AuthService();

export default AuthService;
