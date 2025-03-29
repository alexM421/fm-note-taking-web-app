import React from "react";
import Sun from "./svg/Sun";

export default function FontTheme () {

    return(
        <div id="fontTheme">
            <div className="settings-header">
                <h1 className="text-preset-3">Font Theme</h1>
                <p className="text-preset-5">Choose your font theme:</p>
            </div>
 
            <div  className="modes">
                <label htmlFor="radio-sans" className="mode">
                    <p className="font-example text-preset-4 inter">Aa</p>
                    <div className="mode-text">
                        <h1 className="text-preset-4">Sans-serif</h1>
                        <p className="text-preset-6">Clean and modern, easy to read.</p>
                    </div>
                    <input 
                    id="radio-sans" 
                    type="radio" 
                    name="radio-fontTheme"
                    className="radio-settings"
                    />
                </label>
                <label htmlFor="radio-serif" className="mode">
                <p className="font-example text-preset-4 noto-serif">Aa</p>
                    <div className="mode-text">
                        <h1 className="text-preset-4">Serif</h1>
                        <p className="text-preset-6">Classic and elegant for a timeless feel.</p>
                    </div>
                    <input 
                    id="radio-serif" 
                    type="radio" 
                    name="radio-fontTheme"
                    className="radio-settings"
                    />
                </label>
                <label htmlFor="radio-monospace" className="mode">
                <p className="font-example text-preset-4 source-code-pro">Aa</p>
                    <div className="mode-text">
                        <h1 className="text-preset-4">Monospace</h1>
                        <p className="text-preset-6">Code-like, great for a technical vibe.</p>
                    </div>
                    <input 
                    id="radio-monospace" 
                    type="radio" 
                    name="radio-fontTheme"
                    className="radio-settings"
                    />
                </label>
            </div>

            <button className="blue-btn settings-btn">Apply Changes</button>
        </div>
    )
}