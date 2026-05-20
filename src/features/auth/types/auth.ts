interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export type { LoginRequest, LoginResponse };
