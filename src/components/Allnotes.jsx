import React from "react";
import { Outlet } from "react-router-dom"; 

import Note from "./Note";

import Data from "../data.json"

export default function Allnotes () {


    const generateNote = () => {
        const toReturn = Data.notes.map((note,index) => {
            return(
                <div key={note.id} >
                    <Note
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
        </div>
    )
}