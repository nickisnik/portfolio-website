import React from 'react';
import './Projects.css';


function Projects(props) {
    return (
        <section className='project-list'>
            <div className='project'>
                <header className='project-header'>
                    <img className='project-screen' src="/Hoodify_Screenshot.png" alt="Hoodify" />
                </header>
                <section className='project-details'>
                    <span className="project-title">Hoodify</span>
                    <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem cumque quia ipsum!</p>
                    <div className="project-links">
                        <a href=""><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://hoodify.netlify.app/"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <img className='project-screen' src="/MemoryCard_screen.png" alt="Memory card" />
                </header>
                <section className='project-details'>
                    <span className="project-title">Memory Card</span>
                    <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem cumque quia ipsum!</p>
                    <div className="project-links">
                        <a href=""><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://hoodify.netlify.app/"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <img className='project-screen' src="/Hoodify_Screenshot.png" alt="" />
                </header>
                <section className='project-details'>
                    <span className="project-title">Hoodify</span>
                    <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem cumque quia ipsum!</p>
                    <div className="project-links">
                        <a href=""><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://hoodify.netlify.app/"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            <div className='project'>
                <header className='project-header'>
                    <img className='project-screen' src="/Hoodify_Screenshot.png" alt="" />
                </header>
                <section className='project-details'>
                    <span className="project-title">Hoodify</span>
                    <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem cumque quia ipsum!</p>
                    <div className="project-links">
                        <a href=""><img src="/GitHub-Mark-Light-32px.png"></img></a>
                        <a href="https://hoodify.netlify.app/"><button>Demo</button></a>
                    </div>
                </section>
            </div>
            
        </section>
    );
}

export default Projects;