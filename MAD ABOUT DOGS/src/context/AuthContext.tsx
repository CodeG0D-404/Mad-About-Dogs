import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


import { API_URL } from "../config/api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  authenticated: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [
    authenticated,
    setAuthenticated,
  ] = useState(false);

  const refreshUser =
    async () => {
      try {
        const response =
          await fetch(
            `${API_URL}/auth/me`,
            {
              credentials:
                "include",
            }
          );

        const data =
          await response.json();

        if (
          response.ok &&
          data.success
        ) {
          setUser(data.user);

          setAuthenticated(
            true
          );
        } else {
          setUser(null);

          setAuthenticated(
            false
          );
        }
      } catch {
        setUser(null);

        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

  const logout =
    async () => {
      try {
        await fetch(
          `${API_URL}/auth/logout`,
          {
            method: "POST",
            credentials:
              "include",
          }
        );
      } catch {}

      setUser(null);

      setAuthenticated(false);
    };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authenticated,
        refreshUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};