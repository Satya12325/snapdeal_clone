import { createContext, useState } from "react";

export const UserProvider = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUserinfo] = useState({ displayName: "", isLoggedIn: false });

  const setUser = (data) => {
    console.log(data);
    setUserinfo(data);
  };
  return (
    <UserProvider.Provider value={{ user, setUser }}>
      {children}
    </UserProvider.Provider>
  );
}
