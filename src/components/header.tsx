import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './header.css';

function Header() {
	return (
		<Fade direction="down" duration={500}>
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="">Ekalii</a>
					<span>/&gt;</span>
				</div>

				<ul className="nav-menu">
					<li className="nav-list">
						<a href="#">
							Skills
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