import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Headbar from "./Headbar";

export default function Layout () {

    return(
        <div id="layout">
            <Sidebar/>
            <div id="layout-center">
                <Headbar/>
                <Outlet/>
            </div>
        </div>
    )
}