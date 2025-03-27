import React from "react";
import { Outlet } from "react-router-dom"; 
import { Link } from "react-router-dom";

import Note from "./Note";

import Data from "../data.json"

export default function Allnotes () {

    const [data, setData] = React.useState()

    React.useEffect(() => {
        getData()
    },[])

    const getData = () => {
        const localStorageData = JSON.parse(localStorage.getItem("myNotes"))
        
        if(!localStorageData){
            console.log("NotFound Data in AllNote")
            localStorage.setItem("myNotes", JSON.stringify(Data))
            setData(Data)
        }else{
            console.log("Found Data in AllNote")
            setData(localStorageData)
        }
        
    }

    const generateNote = () => {

        const toReturn = data?.notes.map((note) => {
            return(
                <div key={note.id} >
                    <Note
                id={note.id}
                title={note.title} 
                tags={note.tags} 
                lastEdited={note.lastEdited}
                />
                <hr className="note-hr"/>
                </div>
                
                
            )
        })

        return toReturn
    }

    
    return(
        <div id="allnotes-layout">
            <div id="allnotes">
                <button className="text-preset-4" id="create-new-note">+ Create New Note</button>
                <div id="allnotes-notelist">
                    {generateNote()}
                </div>
            </div>
            <Outlet/>
        </div>
    )
}