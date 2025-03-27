import React from "react";

import { useParams } from "react-router-dom";

import Tag from "./svg/Tag";
import Clock from "./svg/Clock";
import NoteContentSidebar from "./NoteContentSidebar";
import Allnotes from "./Allnotes";

//Uses this for now
import Data from "../data.json"

export default function NoteContent (){

    const [selectedNote, setSelectedNote] = React.useState({
        tags: [],
        content: "",
    })

    //Gets the data from localstorage
    //No catch since it should always work : you're only able to mount this component
    //if you had access from Allnotes.jsx 

    const { id } = useParams()

    const getNoteData = () => {
        const data = JSON.parse(localStorage.getItem("myNotes"))
        const note = data.notes?.filter(note => note.id === Number(id))[0]

        setSelectedNote(note)
    }
    
    React.useEffect(() => {
        getNoteData()   
    },[id])

    //Handle changing inputs

    const handleTagChange = (event) => {
        const inputValue = event.target.value.split(",")
        setSelectedNote(prevNote => ({...prevNote,tags: inputValue}))
    }

    const handleContentChange = (event) => {
        const textAreaContent = event.target.value
        setSelectedNote(prevNote => ({...prevNote, content: textAreaContent}))
    }


    //handle Saving Data

    const saveData = () => {
        const originalData = JSON.parse(localStorage.getItem("myNotes"))


    }

    return( 
        <div id="noteContent-layout">
            <div id="noteContent">
                <h1 className="text-preset-1">{selectedNote?.title}</h1>
                <div id="noteContent-infos">
                    <div className="noteContent-info">
                        <div className="noteContent-nameicon">
                            <Tag/>
                            <p className="text-preset-5">Tags</p>
                        </div>
                        <input 
                        className="text-preset-5"
                        onChange={handleTagChange} 
                        value={selectedNote?.tags}
                        />
                    </div>  
                    <div className="noteContent-info">
                        <div className="noteContent-nameicon">
                            <Clock/>
                            <p className="text-preset-5">Last Edited</p>
                        </div>
                        <p className="text-preset-5">{selectedNote?.lastEdited}</p>
                    </div>  
                </div>
                <hr className="noteContent-hr"/>
                <textarea 
                className="noteContent-text text-preset-5"
                onChange={handleContentChange}
                value={selectedNote?.content}
                ></textarea>
                <hr className="noteContent-hr"/>
                <div className="noteContent-btns">
                    <button 
                    id="save-note" 
                    className="text-preset-4 blue-btn"
                    onClick={saveData}
                    >Save Note</button>
                    <button 
                    id="cancel-note"
                    className="text-preset-4"
                    >Cancel</button>    
                </div>
            </div>
            <NoteContentSidebar/>
        </div>
    )
}