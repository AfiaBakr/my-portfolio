"use server";
import React from "react";
import { GitHubIcon } from "github-icon";
import Link from "next/link";
import Image from "next/image";




const Email =()=>{
    return(
        <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
        <h5 className="text-2xl font-bold text-white my-8" >Let me connect</h5>
        <p className=" text-[#adb7be] mb-4 max-w-md">
        {""}
        I am looking for the new opportunities, my inbox is always open, whether you have a question or want to say Hi, I will try my best to get bact to you!
        </p>
        <div className="social flex flex-row gap-6 py-8">
            <Link href="https://github.com/AfiaBakr" target="_blank">
            <img src={"./icons8-github-logo-48.png"}
            alt="Github Icon"/></Link>
            <Link href="https://www.linkedin.com/in/afia-bakr-a2866aa8/" target="_blank">
            <img src="./icons8-linkedin-48.png"
            alt="Linked Icon"/></Link>
        </div>
        </div>
        <div>
            <form className="flex flex-col ">
                <div className="mb-6">
                <label htmlFor="email" className="text-white block  text-sm font-medium">
                Your Email</label>
                <input 
                type="email" 
                id="email" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="abcdefg@gmail.com"/>
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className="text-white block  text-sm font-medium">
                Subject</label>
                <input 
                type="text" 
                id="subject" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello!"/>
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="text-white block text-sm font-medium">
                Message</label>
                <input 
                type="text" 
                id="message" 
                required 
                className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 mb-2 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let talk about...."/>
                </div>
                <button  type="submit" 
                className="bg-blue-400 hover:bg-blue-600 font-sans rounded-lg block w-full py-2.5 px-2 "
                ><Link href="mailto:afiabakr8602@gmail.com">Send Message</Link></button>
            </form>
        </div>
        </section>
    )
};
export default Email;