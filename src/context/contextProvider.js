import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isFilter, setIsFilter] = useState('');
    const [isCategory, setIsCategorie] = useState('All');
    const [callPopup, setCallPopup] = useState(false);
    const [isSmallSize, setIsSmallSize] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    const handleChangeCategorie = (value) => {
        setIsCategorie(value)
    }

    const handleChange = (e) => {
        setIsFilter(e.target.value)
    }

    const handleClick = () => {
        setIsClicked(true)
    }

    return (
        <StateContext.Provider
            value={{
                isClicked,
                setIsClicked,
                handleClick,
                isFilter,
                handleChange,
                isCategory,
                handleChangeCategorie,
                callPopup, setCallPopup,
                isSmallSize, setIsSmallSize,
                isSidebarActive, setIsSidebarActive
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)