import React from "react";
import ShowPassword from "./svg/ShowPassword";

export default function ChangePassword () {


    return(
        <div id="change-password">
            <h1 className="text-preset-3">Change Password</h1>
            <div className="pwd-input">
                <label className="text-preset-4">Old Password</label>
                <input type="password" />
            </div>
            <div className="pwd-input">
                <label className="text-preset-4">New Password</label>
                <input type="password" />
                <div className="pwd-input-requirements">
                    <p className="text-preset-5">At least 8 characters</p>
                </div>
            </div>
            <div className="pwd-input">
                <label className="text-preset-4">Confirm New Password</label>
                <input type="password" />
            </div>
            <button className="blue-btn text-preset-4 settings-btn">Save Changes</button>
        </div>
    )
}