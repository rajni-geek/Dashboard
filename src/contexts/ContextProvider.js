import React, {  createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  Chat: false,
  Cart: false,
  UserProfile: false,
  Notification: false,
};

export const ContextProvider = ({
  children
}) => {
  const [activeMenu, setActiveMenu, handleClick, setScreenSize] = useState(true);
  return (
    <StateContext.Provider 
    value={{ 
      activeMenu,
      setActiveMenu, 
      initialState,
      handleClick,
      setScreenSize,
    }}
    > 
    { children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);