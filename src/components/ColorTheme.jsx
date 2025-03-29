import React from "react";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";
import System from "./svg/System";

import { useTheme } from "../context/ThemeContext";

export default function ColorTheme () {

    const { theme, setTheme } = useTheme()


    const handleClick = (e) => {
        setTheme(e.target.value)
    }

    return(
        <div id="colorTheme">
            <div className="settings-header">
                <h1 className="text-preset-3">Color Theme</h1>
                <p className="text-preset-5">Choose your color theme:</p>
            </div>
 
            <div  className="modes">
                <label htmlFor="radio-light" className="mode">
                    <Sun/>
                    <div className="mode-text">
                        <h1 className="text-preset-4">Light Mode</h1>
                        <p className="text-preset-6">Pick a clean and classic light theme</p>
                    </div>
                    <input 
                    id="radio-light" 
                    type="radio" 
                    name="radio-colorTheme"
                    className="radio-settings"
                    value="lightMode"
                    onChange={handleClick}
                    checked={theme==="lightMode"}
                    />
                </label>
                <label htmlFor="radio-dark" className="mode">
                    <Moon/>
                    <div className="mode-text">
                        <h1 className="text-preset-4">Dark Mode</h1>
                        <p className="text-preset-6">Pick a sleek and modern dark theme</p>
                    </div>
                    <input 
                    id="radio-dark" 
                    type="radio" 
                    name="radio-colorTheme"
                    className="radio-settings"
                    value="darkMode"
                    onChange={handleClick}
                    checked={theme==="darkMode"}
                    />
                </label>
                <label htmlFor="radio-system" className="mode">
                    <System/>
                    <div className="mode-text">
                        <h1 className="text-preset-4">System</h1>
                        <p className="text-preset-6">Adapts to your device's theme</p>
                    </div>
                    <input 
                    id="radio-system" 
                    type="radio" 
                    name="radio-colorTheme"
                    className="radio-settings"
                    value="system"
                    onChange={handleClick}
                    checked={theme==="system"}
                    />
                </label>
            </div>

            <button className="blue-btn settings-btn">Apply Changes</button>
        </div>
    )
}