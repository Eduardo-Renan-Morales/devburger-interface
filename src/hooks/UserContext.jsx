import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({})

export const UseProvider = ({ children }) => {
  const [userInfo, setUseInfo] = useState({});

  const putUserData = (userInfo) => {
    setUseInfo(userInfo)

    localStorage.setItem('deveBurger:userData', JSON.stringify(userInfo))
  }

  const logout = () => {
    setUseInfo({})
    localStorage.removeItem('deveBurger:userData')
  }

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('deveBurger:userData')

    if (userInfoLocalStorage) {
      setUseInfo(JSON.parse(userInfoLocalStorage))
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be a valid context')
  }
  return context
}
