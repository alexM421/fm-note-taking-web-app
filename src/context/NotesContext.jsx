import React, { createContext, useContext } from "react"

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = React.useState({})

    return(
        <NotesContext.Provider value={{ notes, setNotes}}>
            {children}
        </NotesContext.Provider>
    )
}


export const useNotes = () => useNotes(useContext)