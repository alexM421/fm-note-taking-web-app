import React from "react";
import SettingsIcon from "./svg/SettingsIcon";
import Search from "./svg/Search";

import { Link } from "react-router-dom";

export default function Headbar () {

    return(
        <div id="headbar">
            <h1 className="text-preset-1">All Notes</h1>
            <div id="headbar-nav">
                <div id="headbar-search">
                    <Search/>
                    <input 
                    type="text"
                    className="text-preset-5" 
                    placeholder="Search by title, content, or tags…"
                    />
                </div>
                <Link to="/settings">
                    <SettingsIcon/>
                </Link>
            </div>
        </div>
    )
}