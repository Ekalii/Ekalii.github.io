import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Header() {
	return (
		<Fade duration={1000}>
		<header className="header header--section">
			<div className="inner">

				<ul className="nav-menu">
					<li className="nav-list">
						<a href="#">
							Skliis
						</a>
					</li>
					<li className="nav-list">
						<a href="#">
							Open Source
						</a>
					</li>
					<li className="nav-list">
						<a href="#">
							Projects
						</a>
					</li>
					<li className="nav-list">
						<a href="#">
							Experience
						</a>
					</li>
					<li className="nav-list">
						<a href="#">
							Achievements
						</a>
					</li>
					<li className="nav-list">
						<a href="#">
							Contact Me
						</a>
					</li>
				</ul>

			</div>
		</header>
		</Fade>
	);
}
export default Header;