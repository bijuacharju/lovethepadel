import { httpInitiateClient } from "../axiosConfig";
import {
  ApiErrorResponse,
  ApiResponse,
} from "@lovethepadel/@types/service/response";
import { API } from "../api";
import { useMutation } from "@tanstack/react-query";
import { ISignupForm } from "@lovethepadel/@types/pages/signup";
import { toaster } from "@lovethepadel/components/ui/toaster";

const signup = (data: ISignupForm) => {
  return httpInitiateClient.post<ApiResponse<ISignupForm>>(API.REGISTER, {
    data: data,
  });
};

const useSignup = () => {
  //   const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signup,
    onSuccess: (response) => {
      toaster.success({
        title: response?.data.message ?? "Registered Successfully",
      });
      //   queryClient.invalidateQueries({ queryKey: ["init"] });
    },
    onError: (error: ApiErrorResponse) => {
      const errorMessage = error.response?.data?.error?.errorMessage;
      toaster.error({ title: errorMessage ?? "Registration Failed" });
    },
  });
};

export { useSignup };
