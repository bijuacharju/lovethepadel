interface TokenDetails {
  accessToken: string;
  refreshToken: string;
}

interface TokenInfo {
  is_valid: boolean;
  exp: number;
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export type { TokenDetails, TokenInfo, TokenResponse };
