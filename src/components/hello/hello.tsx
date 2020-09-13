import React from 'react';
import './hello.css';
import { greeting } from '../../portfolio';
import Social from '../../components/social/social';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade bottom duration={800}>
		<section className="section section--hello">
			<div className="inner">

				<div className="wrapper">
					<div className="text-title">
						{greeting.title}&nbsp;
						<span className="hello-emoji">👋</span>
					</div>
					<div className="text-subtitle">
						<span>{greeting.subTitle}</span>
					</div>
					<Social />
				</div>

				<div className="image-div">
				<img
					src={require("../../assets/web-developer-color.svg")}
					alt="programmer ekalii"
				/>
				</div>

			</div>
		</section>
		</Fade>
	);
}
export default Hello;