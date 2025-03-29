import React from  "react"

import { Outlet, Link } from "react-router-dom"
import ChevronRight from "./svg/ChevronRight"
import Sun from "./svg/Sun"
import Logout from "./svg/Logout"
import Lock from "./svg/Lock"
import Font from "./svg/Font"


export default function Settings () {



    return(
        <div id="settings-layout">
            <div id="settings">
                 <Link className="setting-link" to="colorTheme">
                    <div className="setting-link-nameicon">
                        <Sun/>
                        <p className="text-preset-4">Color Theme</p>
                    </div>
                    <ChevronRight/>
                 </Link>
                 <Link className="setting-link"  to="fontTheme">
                    <div className="setting-link-nameicon">
                        <Font/>
                        <p className="text-preset-4">Font Theme</p>
                    </div>
                    <ChevronRight/>
                 </Link>
                 <Link className="setting-link" to="changePassword">
                    <div className="setting-link-nameicon">
                        <Lock/>
                        <p className="text-preset-4">Change Password</p>
                    </div>
                    <ChevronRight/>
                 </Link>
                 <hr/>
                 <Link className="setting-link">
                    <div className="setting-link-nameicon">
                        <Logout/>
                        <p className="text-preset-4">Logout</p>
                    </div>
                    <ChevronRight/>
                 </Link>
            </div>
            <Outlet/>
        </div>
    )
}