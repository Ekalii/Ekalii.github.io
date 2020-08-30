import React from 'react';
import Header from '../components/header/header';
import Hello from '../containers/hello/hello';

function Main() {
	return (
		<div className="root">
			<Header />
			<Hello />
		</div>
	);
}
export default Main;