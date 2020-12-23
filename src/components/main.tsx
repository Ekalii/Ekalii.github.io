import React from 'react';
import Header from './header/Header';
import Hello from './hello/Hello';
import Skill from './skill/Skill';
import Top from './top/top';
import OpenSource from './opensource/OpenSource';
import Achievement from './achievement/Achievement';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Experience from './experience/Experience';
import Project from './project/Project';
import { greeting, skills, experience, openSourceProjects, projects, achievements, blogs, contactInfo } from '../portfolio';

function Main() {
	return (
		<div className="root">
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{openSourceProjects.view && <OpenSource />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</div>
	);
}
export default Main;