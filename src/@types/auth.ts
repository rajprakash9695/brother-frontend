export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUser = null | Record<string, any>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: 'jwt';
  register: (
    name: string,
    email: string,
    password: string,
    mobile: string
  ) => Promise<void>;
  login: (token: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  mobile: string;
};
