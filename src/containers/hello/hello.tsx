import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './hello.css';
import { greeting } from '../../portfolio';
import Social from '../../components/social/social';

function Hello() {
	return (
		<Fade direction="left" duration={800}>
		<section className="section section--hello">
			<div className="inner">

				<div className="text-title">
					{greeting.title}&nbsp;
					<span className="hello-emoji">👋</span>
				</div>
				<div className="text-subtitle">

				</div>
				<Social />

			</div>
		</section>
		</Fade>
	);
}
export default Hello;