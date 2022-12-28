import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider() {
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}
