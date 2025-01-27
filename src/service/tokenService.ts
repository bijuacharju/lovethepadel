import {
  TokenDetails,
  TokenInfo,
} from "@lovethepadel/@types/service/tokenService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function setToken(token: TokenDetails) {
  const decodedToken = jwtDecode(token.accessToken);
  const expirationTimestamp = decodedToken.exp ?? 0;
  const expirationDate = new Date(expirationTimestamp * 1000 + 300000);
  Cookies.set(
    "accessToken",
    token.accessToken,
    localStorage.getItem("remember_me") === "true"
      ? {
          expires: expirationDate,
        }
      : undefined
  );
  Cookies.set(
    "refreshToken",
    token.refreshToken,
    localStorage.getItem("remember_me") === "true"
      ? {
          expires: 1,
        }
      : undefined
  );
}

function getToken() {
  try {
    return {
      accessToken: Cookies.get("accessToken") ?? "",
      refreshToken: Cookies.get("refreshToken") ?? "",
    } as TokenDetails;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function getTokenDetails(): TokenInfo | null {
  try {
    const token = getToken();
    return token
      ? (JSON.parse(window.atob(token.accessToken.split(".")[1])) as TokenInfo)
      : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function clearToken() {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
}

export const getRole = () => {
  return getTokenDetails();
};

const TokenService = {
  setToken,
  getToken,
  getTokenDetails,
  clearToken,
};

export default TokenService;
