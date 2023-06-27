import avatar from "/avatar.png";
import {motion} from 'framer-motion';
import { useState } from "react";
import "../styles/global.css";

export default function Nav() {
    const [toggle, setToggle] = useState(false)
    return (
        <nav>
            <svg width={250} height={4} viewBox="0 0 250 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L428 2" 
                strokeWidth={2}
                stroke="#282828" 
                strokeLinecap="round" />
            </svg>
            <div>
                <img src={avatar} alt="Profile  picture" />
            </div>

            {/* {title} */}
            <h1><a href="/">Hua.</a></h1>
            <h1><a href="/about">About</a></h1>

            <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )
}