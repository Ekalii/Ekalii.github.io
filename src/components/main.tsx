import React from 'react';
import Header from './header/header';
import Hello from '../components/hello/hello';
import Skill from '../components/skill/skill';

function Main() {
	return (
		<div className="root">
			<Header />
			<Hello />
			<Skill />
		</div>
	);
}
export default Main;