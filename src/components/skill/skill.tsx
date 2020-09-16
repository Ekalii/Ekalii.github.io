import React from 'react';
import './skill.css';
import { skills } from '../../portfolio';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    return(
        <section className="section section--skill" id="skills">
            <div className="inner">

            <Fade right duration={1000}>
                <div className="wrapper">
                    <div className="title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="subtitle">
                        <p>{skills.subTitle}</p>
                    </div>
                    <div className="skill-icons">
                        <ul className="icons">
                            {skills.icons.map(icon => (
                                <li className="icon-inline" key={icon.key}>
                                    <i className={icon.fontAwesome}></i>
                                    <p>{icon.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="desc-skills">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
                    </div>
                </div>
                </Fade>

                <Fade left duration={1000}>
                <div className="skill-image">
                    <img src={require("../../assets/skills.svg")} alt="working ekalii" />
                </div>
                </Fade>

            </div>
        </section>
    ); 
}
export default Skill;