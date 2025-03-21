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
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [setCurrentColor, setCurrentMode] = useState(true)
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]:true});
  }
  return (
    <StateContext.Provider 
    value={{ 
      activeMenu,
      setActiveMenu, 
      isClicked,
      setIsClicked,
      handleClick,
      screenSize,
      setScreenSize,
      setCurrentColor, 
      setCurrentMode,
    }}
    > 
    { children }
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);