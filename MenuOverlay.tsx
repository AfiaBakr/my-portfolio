import React from "react";
import NavLink from "./NavLink";

export default function MenuOverlay ({links:any}){
    return(
        <ul className="flex flex-col py-4 items-center">
            <li key={index}>
            {links.map((link, index)=>(<NavLink href={link.path} title={link.title}/>))}
            </li>
        </ul>
    )
}