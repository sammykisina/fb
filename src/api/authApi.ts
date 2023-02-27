import { LoginData } from "../types/typings.t";

const AuthAPI = {
  /**
   * In a real API we shld call the api that will return the jwt...but since we dont have one, i creating a mock jwt
   */
  login: async (data: LoginData) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInVzZXJJZCI6MTAxfQ.LjcuTtViQZrIJyp1BdWy2EOng7h-UUMvdNd7hhOC1hg";
    return {
      message: "Welcome back.",
      token,
    };
  },
};

export default AuthAPI;
