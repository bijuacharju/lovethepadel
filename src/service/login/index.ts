import { ISigninForm } from "@lovethepadel/@types/pages/signin";
import { httpInitiateClient } from "../axiosConfig";
import { ApiResponse } from "@lovethepadel/@types/service/response";
import { TokenResponse } from "@lovethepadel/@types/service/tokenService";
import { API } from "../api";
import { useMutation } from "@tanstack/react-query";

const login = (data: ISigninForm) => {
  return httpInitiateClient.post<ApiResponse<TokenResponse>>(API.LOGIN, {
    data: data,
  });
};

const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export { useLogin };
