import React from 'react';
import './header.css';
import { greeting } from '../../portfolio';

function Header() {
	const onClickMenu: any = function() {
		const toggleNav: HTMLElement | null = document.getElementById("toggle-nav");
		if (!toggleNav) throw new Error("HTML Error!")
		if (toggleNav.style.display === "block") {
			toggleNav.style.display = "none";
		} else {
			toggleNav.style.display = "block";
		}
	};
	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="">{greeting.username}</a>
					<span>/&gt;</span>
				</div>

				<div className="toggle-btn" onClick={onClickMenu}>
					<i className="fas fa-bars"></i>
				</div>

				<ul className="nav-menu" id="toggle-nav">
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