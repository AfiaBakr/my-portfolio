'use client';
import react from "react";
import ProjectCards from "./ProjectCards";
import Image from "next/image"; 

const projectData =[
    {
        id: 1,
        title: "Weather Gatgeds",
        description: "A mini project for a fun by Student Ambassador Sir Asharib.",
        image: "/image/project/project1.jpg",
        tag: "All",
        gitUrl: "git@github.com:AfiaBakr/New_Challenge_30_Days.git",
        previewUrl: "https://new-challenge-30-days.vercel.app/"
    },
    {
        id: 2,
        title: "Birth Day Wish Card",
        description: " This create for my Daughter but a part of project by Student Ambassador Sir Asharib.",
        image: "/image/project/project2.jpg",
        tag: "All",
        gitUrl: "git@github.com:AfiaBakr/03_birthday_wish.git",
        previewUrl: "https://03-birthday-wish-kohl.vercel.app/"
    },
    {
        id: 3,
        title: "Web page of a product of PakWheel",
        description: "An assignment of GIAIC by Sir Jawwad Ali.",
        image: "/image/project/project3.jpg",
        tag: "All",
        gitUrl: "git@github.com:AfiaBakr/pakwheel-cars-webpage.git",
        previewUrl: "https://pakwheel-cars-webpage.vercel.app/"
    }
]

const Project =()=>{
    return(
        <>
        <h2 className="text-center text-white font-bold text-4xl my-8">My Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectData.map((project)=> 
            <ProjectCards 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />)}
        </div>
        </>
    )
};

export default Project;