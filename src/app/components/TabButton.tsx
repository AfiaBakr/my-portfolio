import react from "react";
import AboutSection from "./Aboutsection";



const TabButton = ({active, selectTab, children}:any)=> {
    const buttonClassess = active? 'text-white border-b border-purple-500' :'text-[#adb7be]'
    return(
        <button onClick={selectTab}>
        <p className= {'mr-3 font-semibold hover:text-white ${buttonClassess}'}>
            {children}
        </p>

        </button>
    )
};

export default TabButton;