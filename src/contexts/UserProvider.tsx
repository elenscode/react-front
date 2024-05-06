import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  userName: string | null;
  userId: string | null;
  isLoggin: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggin, setIsLoggin] = useState(false);

  const value = {
    userName,
    userId,
    isLoggin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
