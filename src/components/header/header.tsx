import React from 'react';
import './header.css';
import { greeting } from '../../portfolio';

function Header() {
	const onClickMenu: any = function() {
		const toggleNav: HTMLElement | null = document.getElementById("toggle-nav");
		const menuIcon: HTMLElement | null = document.getElementById("menu-icon");
		const closeIcon: HTMLElement | null = document.getElementById("close-icon");
		if (!toggleNav || !menuIcon || !closeIcon) throw new Error("HTML Error!")
		toggleNav.style.display = "block";
		menuIcon.style.display = "none";
		closeIcon.style.display = "block";
	};
	const onClickClose: any = function() {
		const toggleNav: HTMLElement | null = document.getElementById("toggle-nav");
		const menuIcon: HTMLElement | null = document.getElementById("menu-icon");
		const closeIcon: HTMLElement | null = document.getElementById("close-icon");
		if (!toggleNav || !menuIcon || !closeIcon) throw new Error("HTML Error!")
		toggleNav.style.display = "none";
		menuIcon.style.display = "block";
		closeIcon.style.display = "none";
	};
	return (
		<header className="header header--section">
			<div className="inner clearfix">

				<div className="header-logo">
					<span>&lt;</span>
					<a href="">{greeting.username}</a>
					<span>/&gt;</span>
				</div>

				<div className="toggle-btn">
					
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