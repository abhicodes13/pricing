import { React } from "react";

function Header(){
    return (
        <div className="flex">
        <h1 className="htl">HowToLearn</h1>
        <div className="flex flex-text">
        <li>Home</li>
        <li>Pricing</li>
        <li>Contact</li>
        </div>
        </div>
    )
}

export default Header