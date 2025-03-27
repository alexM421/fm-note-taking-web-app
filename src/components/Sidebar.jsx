import React from "react";

import Logo from "../assets/images/logo.svg"
import Tag from "../assets/images/icon-tag.svg"

import { Link } from "react-router-dom";
import Archive from "./svg/Archive";
import ChevronRight from "./svg/ChevronRight";
import Home from "./svg/Home";

export default function Sidebar () {


    return(
        <div id="sidebar">
            <img id="logo" src={Logo}/>
            <div id="sidebar-content">
                <div id="sidebar-links">
                    <Link className="sidebar-element" to="/notes">
                        <Home/>
                        <p className="text-preset-4">All Notes</p>
                        <ChevronRight/>
                    </Link>
                    <Link className="sidebar-element">
                        <Archive/>
                        <p className="text-preset-4">Archived Notes</p>
                        <ChevronRight/>
                    </Link>
                </div>
                <hr/>
                <p className="text-preset-4">Tags</p>
                <div id="sidebar-tags">
                    <div className="sidebar-element">
                        <img src={Tag} />
                        <p className="text-preset-4">Cooking</p>
                    </div>
                    <div className="sidebar-element">
                        <img src={Tag} />
                        <p className="text-preset-4">React</p>
                    </div>
                    <div className="sidebar-element">
                        <img src={Tag} />
                        <p className="text-preset-4">Dev</p>
                    </div>
                    <div className="sidebar-element">
                        <img src={Tag} />
                        <p className="text-preset-4">Games</p>
                    </div>
                    <div className="sidebar-element">
                        <img src={Tag} />
                        <p className="text-preset-4">Outside</p>
                    </div>
                </div>
            </div>
        </div>
    )
}