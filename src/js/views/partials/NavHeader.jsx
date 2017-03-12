import React from 'react';
import { Link } from 'react-router';

class NavHeader extends React.Component {
	render() { //this is the function to return html
		return (
			<header className="nav-header">
				<div className="logo-container">
					<h1>
						<Link to="/"><img src="images/logo.png" alt="chinesepod"/></Link>
					</h1>
				</div>
			</header>
		);
	}
}

export default NavHeader;