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
						<a href="#achievement">
							Achievements
						</a>
					</li>
					<li className="nav-list">
						<a href="#blog">
							Blogs
						</a>
					</li>
					<li className="nav-list">
						<a href="#contact">
							Contact Me
						</a>
					</li>
				</ul>

			</div>
		</header>
	);
}
export default Header;