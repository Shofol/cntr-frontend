export type User = {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
};

export type Token = {
  access_token: string;
  token_type: string;
};

export interface UserData {
  u: User;
  t: Token;
  id?: string;
  email?: string;
  is_active?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
}

export type BEError = {
  detail: string;
};
