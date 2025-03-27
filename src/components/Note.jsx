import React from "react";

import { Link } from "react-router-dom";

export default function Note ( { title, tags, lastEdited, id }) {
    

    return(
        <Link className="note" to={`/notes/${id}`}>
            <h1 className="text-preset-3">{title}</h1>
            <div className="note-tags">
                {tags.map(((tag, index) => <p key={`${title}-tag-${index}`} className="text-preset-6 note-tag">{tag}</p>))}
            </div>
            <p className="date text-preset-6">{lastEdited}</p>
        </Link>
    )
}