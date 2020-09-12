import React from 'react';
import Header from './header/header';
import Hello from '../components/hello/hello';
import Skill from '../components/skill/skill';
import Top from '../components/topButton/top';
import OpenSource from '../components/opensource/opensource';

function Main() {
	return (
		<div className="root">
			<Header />
			<Hello />
			<Skill />
			<OpenSource />
			<Top />
		</div>
	);
}
export default Main;