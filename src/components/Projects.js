import React from 'react';
import './Projects.css';


const Projects = () => {


    const projectList = [{
        name: 'SIMPLE/UNIT',
        desc: "A recreation of the interactive BASIC/AGENCY website. React & Framer Motion-driven; this is my take on the frontendpractice.com challenge.",
        imgUrl: '/simple_unit.webp',
        demo: 'https://simple-unit.vercel.app/',
        github: 'https://github.com/nickisnik/simple-unit'
    }, {
        name: 'Hoodify',
        desc: 'A basic Next.JS E-commerce app with product pages and shopping cart functionality.',
        imgUrl: '/Hoodify_Screenshot.png',
        demo: 'https://hoodify-next.vercel.app/products',
        github: 'https://github.com/nickisnik/hoodify'
    }, {
        name: 'Pomodoro',
        desc: 'Customizable Pomodoro timer app: set your work and break cycles. The timer keeps running even on minimized tabs!',
        imgUrl: '/pomodoro.png',
        demo: 'https://pomodoro-sand.vercel.app/',
        github: 'https://github.com/nickisnik/pomodoro'
    }, {
        name: 'Exoqueries',
        desc: "Explore a random exoplanet and compare it to the Earth. The data is fetched from NASA&apos;s API.",
        imgUrl: '/Exo_screen.png',
        demo: 'https://exoqueries.vercel.app/',
        github: 'https://github.com/nickisnik/exoqueries'
    } ]

    const projects = projectList.map((project, index) => {
        return (
            <div className='project' key={index}>
                <header className='project-header'>
                    <a href={project.demo} rel="noreferrer" target="_blank"><img className='project-screen' src={project.imgUrl} alt={project.name} /></a>
                </header>
                <section className='project-details'>
                    <span className="project-title">{project.name}</span>
                    <p className='project-description'>{project.desc}</p>
                    <div className="project-links">
                        <a href={project.github} rel="noreferrer" target="_blank"><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href={project.demo} rel="noreferrer" target="_blank"><button>Demo</button></a>
                    </div>
                </section>
            </div>
        )
    })
    return (
        <section className='project-list'>
          {projects}
            
        </section>
    );
}

export default Projects;