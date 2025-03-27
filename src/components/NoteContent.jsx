import React from "react";

import Tag from "./svg/Tag";
import Clock from "./svg/Clock";
import NoteContentSidebar from "./NoteContentSidebar";
import Allnotes from "./Allnotes";

export default function NoteContent ( { Title }){

    return(
        <div id="noteContent-layout">
            <Allnotes/>
            <div id="noteContent">
                <h1 className="text-preset-1">Titre</h1>
                <div id="noteContent-infos">
                    <div className="noteContent-info">
                        <div className="noteContent-nameicon">
                            <Tag/>
                            <p className="text-preset-5">Tags</p>
                        </div>
                        <p className="text-preset-5">Dev, React</p>
                    </div>  
                    <div className="noteContent-info">
                        <div className="noteContent-nameicon">
                            <Clock/>
                            <p className="text-preset-5">Last Edited</p>
                        </div>
                        <p className="text-preset-5">29 Oct 2024</p>
                    </div>  
                </div>
                <hr className="noteContent-hr"/>
                <textarea 
                className="noteContent-text text-preset-5"
                >Content</textarea>
                <hr className="noteContent-hr"/>
                <div className="noteContent-btns">
                    <button 
                    id="save-note" 
                    className="text-preset-4 blue-btn"
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