import React from 'react';
import './Projects.css';


function Projects(props) {
    return (
        <section className='project-list'>
            <div className='project'>
                <header className='project-header'>
                    <a href="https://hoodify-next.vercel.app/products" rel="noreferrer" target="_blank"><img className='project-screen' src="/Hoodify_Screenshot.png" alt="Hoodify" /></a>
                </header>
                <section className='project-details'>
                    <span className="project-title">Hoodify</span>
                    <p className='project-description'>A basic Next.JS E-commerce app with product pages and shopping cart functionality.</p>
                    <div className="project-links">
                        <a href="https://github.com/nickisnik/hoodify" rel="noreferrer" target="_blank"><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://hoodify-next.vercel.app/products" rel="noreferrer" target="_blank"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <a href="https://pomodoro-sand.vercel.app/" target="_blank" rel="noreferrer"><img src="/pomodoro.png" className='project-screen' alt="pomodoro" /></a>
                </header>
                <section className='project-details'>
                    <span className="project-title">Pomodoro</span>
                    <p className='project-description'>Customizable Pomodoro timer app: set your work and break cycles. The timer keeps running even on minized tabs!</p>
                    <div className="project-links">
                        <a href="https://github.com/nickisnik/pomodoro" target="_blank" rel="noreferrer"><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://pomodoro-sand.vercel.app/" target="_blank" rel="noreferrer"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <a href="https://exoqueries.vercel.app/" rel="noreferrer" target="_blank"><img className='project-screen' src="/Exo_screen.png" alt="" /></a>
                </header>
                <section className='project-details'>
                    <span className="project-title">Exoqueries</span>
                    <p className='project-description'>Explore a random exoplanet and compare it to the Earth. The data is fetched from NASA's API.</p>
                    <div className="project-links">
                        <a href="https://github.com/nickisnik/exoqueries" rel="noreferrer" target="_blank"><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://exoqueries.vercel.app/" rel="noreferrer" target="_blank"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <a href="https://memorycardz.netlify.app/" rel="noreferrer" target="_blank"><img className='project-screen' src="/MemoryCard_screen.png" alt="Memory card" /></a>
                </header>
                <section className='project-details'>
                    <span className="project-title">Memory Card</span>
                    <p className='project-description'>A React memory card game with random thematic images fetched from a public API. Goal: don't click on the same card twice!</p>
                    <div className="project-links">
                        <a href="https://github.com/nickisnik/react-memory-card" rel="noreferrer" target="_blank"><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://memorycardz.netlify.app/" rel="noreferrer" target="_blank"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            
        </section>
    );
}

export default Projects;