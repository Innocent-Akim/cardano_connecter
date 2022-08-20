import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const ifIsSmall = window.innerWidth > 720;

    const [isClicked, setIsClicked] = useState(false);
    const [isActivePage, setIsActivePage] = useState('Home');
    const [isFilter, setIsFilter] = useState('');
    const [isCategory, setIsCategorie] = useState('All');
    const [callPopup, setCallPopup] = useState(false);
    const [isSmallSize, setIsSmallSize] = useState(ifIsSmall);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isStatus, setIsStatus] = useState(false);

    const handleChangeCategorie = (value) => {
        setIsCategorie(value)
    }

    const handleChangePage = (menu) => {
        setIsActivePage(menu)
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
                isActivePage, handleChangePage,
                callPopup, setCallPopup,
                isSmallSize, setIsSmallSize,
                isSidebarActive, setIsSidebarActive,
                isStatus, setIsStatus

            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)