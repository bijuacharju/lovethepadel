import Homepage from "@lovethepadel/pages/Homepage";
import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constants";
import PublicRoute from "./PublicRoute";
import Signin from "@lovethepadel/pages/Signin";
import Signup from "@lovethepadel/pages/Signup";
import EmailOtpVerification from "@lovethepadel/pages/EmailOtpVerification";
import SetPassword from "@lovethepadel/pages/SetPassword";

const routes = [
  {
    path: NAVIGATION_ROUTES.HOME,
    element: <Homepage />,
  },
  {
    path: NAVIGATION_ROUTES.SIGNIN,
    element: <PublicRoute Component={Signin} />,
  },
  {
    path: NAVIGATION_ROUTES.SIGNUP,
    element: <PublicRoute Component={Signup} />,
  },
  {
    path: NAVIGATION_ROUTES.EMAIL_OTP_VERIFICATION,
    element: <PublicRoute Component={EmailOtpVerification} />,
  },
  {
    path: NAVIGATION_ROUTES.SET_PASSWORD,
    element: <PublicRoute Component={SetPassword} />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
