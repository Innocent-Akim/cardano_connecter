import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isFilter, setIsFilter] = useState('');
    const [isCategory, setIsCategorie] = useState('All');

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
                handleChangeCategorie
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)