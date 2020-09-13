import React from 'react';
import './header.css';
import { greeting } from '../../portfolio';

function Header() {
	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="">{greeting.username}</a>
					<span>/&gt;</span>
				</div>

				<ul className="nav-menu">
					<li className="nav-list">
						<a href="#skills">
							Skills
						</a>
					</li>
					<li className="nav-list">
						<a href="#opensource">
							Open Source
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
							Blogs
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
	);
}
export default Header;