import './Body.css';
import falcon from './assets/images/falcon.jpg';
import usmc from './assets/images/usmc1.jpg';
import cardio from './assets/images/cardio.jpg';
import hero from './assets/images/hero.jpg';
import me from './assets/images/me1.png';
import { useState } from 'react';


function Body() {
    const [marineHovered, setMarineHovered] = useState(false); 
    const [dassualtHovered, setDassaultHovered] = useState(false); 
    const [cardioHovered, setCardioHovered] = useState(false);
    const [click, setClick] = useState(1);

    const buttons = (
        <div style={{ textAlign: "center" }}>
        <div className="card-buttons">
            <button onClick={() => setClick(1)} className={click === 1 ? "active" : ""}>Cardio Flow Design</button>
            <button onClick={() => setClick(2)} className={click === 2 ? "active" : ""}>Dassault</button>
            <button onClick={() => setClick(3)} className={click === 3 ? "active" : ""}>U.S. Marine Corps</button>
        </div>
        </div>
    )

    const marine = marineHovered ? (
        <div className="cardinfo" onMouseLeave={() => setMarineHovered(false)}>
          <img src={usmc} alt="United States Marine Corps" />
          <div className="overlay">
            <p>● Led inspections and repairs of high-tech aircraft electrical systems</p>
            <p>● Collaborated with private contractors such as Northrop Grumman, and Kranze Technology Solutions (KTS)</p>
            <p>● Performed operational tests on aircraft components to isolate malfunctions</p>
          </div>
        </div>
    ) : (
        <div className="card">
          <img src={usmc} alt="USMC" />
          <button onClick={() => setMarineHovered(true)}>Info</button>
        </div>
    );



    const dassault = dassualtHovered ? (
        <div className="cardinfo" onMouseLeave={() => setDassaultHovered(false)}>
            <img src={falcon} alt="Dassault Falcon Jet" />
          <div className="overlay">
            <p>● Diagnosed and repaired avionics/electrical systems</p>
            <p>● Ensured operational readiness through comprehensive system
            inspections</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <img src={falcon} alt="Dassault Falcon Jet" />
          <button onClick={() => setDassaultHovered(true)}>Info</button>
        </div>
      );


    
    const cardioFlow = cardioHovered ? (
        <div className="cardinfo" onMouseLeave={() => setCardioHovered(false)}>
          <img src={cardio} alt="Cardio Flow Design" />
          <div className="overlay">
            <p>● Built and maintained backend features in C#</p>
            <p>● Collaborated with senior engineers</p>
            <p>● Conducted code reviews</p>
          </div>
        </div>        
    ) : (
        <div className="card">
            <img src={cardio} alt="Cardio Flow Design" />
            <button onClick={() => setCardioHovered(true)}>Info</button>
        </div>    
    );  
  
     

    const content = 
    click === 1 ? cardioFlow :
    click === 2 ? dassault :
    marine;

    return (
        <>
            <div className="hero-container ">
                <img className="hero-image" src={hero} />
                <img className="hero-me" src={me} />
                <h1 className="hero-text">I'm <span style={{color: '#007AFF'}}>Andres Delgado</span></h1>
            </div>
{/* -------------------------------------------------------------- */}
            <div className="about-container" id="about">
                <h2 className="about-text">About Me</h2>
                <p className="about-text">Aspiring Software Engineer and Marine Corps Veteran with experience leading teams, managing projects, and overcoming complex challenges. Highly motivated, fast learner, and team player who is proficient in multiple scripting languages. Passionate about building accessible, user-centered applications with clean and modern code.</p>
            </div>



{/* -------------------------------------------------------------- */}
            <div className="skills-container" id="skills">
                <h2 className="skills-text">My <span style={{color: '#007AFF'}}>Skills</span></h2>
                <div className="skillscard-container">
                    <div className="skillscard">
                        <h3>Front-End</h3>
                        <div className='dog'>
                            <p>React<br />JavaScript<br />HTML<br />CSS</p>
                        </div>
                    </div>
                    <div className="skillscard">
                        <h3>Back-End</h3>
                        <div className='dog'>
                            <p>Java<br />C#</p>
                        </div>
                    </div>
                    <div className="skillscard">
                        <h3>Data Base</h3>
                        <div className='dog'>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>
{/* -------------------------------------------------------------- */}
            <div className="experience-container" id="experience">
                <h2 className="experience-text">Experience</h2>
                {buttons}
                <div className="card-container">
                    {content}
                </div>
            </div>    
        </>    
    )
}

export default Body;