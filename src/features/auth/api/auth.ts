import axiosInstance from '../../../api/axiosInstance';
import type { LoginRequest, LoginResponse } from '../types/auth';
import AuthEndpoint from '../../../api/auth.endpoint';

const Auth = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>(
      AuthEndpoint.LOGIN,
      credentials
    );
    return response.data;
  },
};

export default Auth;
