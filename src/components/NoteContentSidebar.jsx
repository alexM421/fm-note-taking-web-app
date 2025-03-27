import React from "react";

import Archive from "./svg/Archive";
import Delete from "./svg/Delete";

export default function NoteContentSidebar () {


    return(
        <div id="noteContentSidebar">
            <div className="noteContentSidebar-btn text-preset-4">
                <Archive/>
                <p>Archive Note</p>
            </div>
            <div className="noteContentSidebar-btn text-preset-4">
                <Delete/>
                <p>Delete Note</p>
            </div>
        </div>
    )
}