import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({links}:any)=>{
    return(
        <ul className="flex flex-col py-4 items-center">
            <li key={"index"}>
            {links.map((link: { path: any; title: any; }, index: any)=>(<NavLink href={link.path} title={link.title}/>))}
            </li>
        </ul>
    )
}

export default MenuOverlay;
