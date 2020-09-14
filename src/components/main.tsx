import React from 'react';
import Header from './header/header';
import Hello from '../components/hello/hello';
import Skill from '../components/skill/skill';
import Top from '../components/topButton/top';
import OpenSource from '../components/opensource/opensource';
import Achievement from '../components/achievement/achievement';
import Blog from '../components/blog/blog';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

function Main() {
	return (
		<div className="root">
			<Header />
			<Hello />
			<Skill />
			<OpenSource />
			<Achievement />
			<Blog />
			<Contact />
			<Footer />
			<Top />
		</div>
	);
}
export default Main;