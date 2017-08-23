'use strict';

const React = require('react');

const Footer = class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="moto">
					<div className="text">"You must do the things you think you cannot do”</div>
					<div className="by">- Eleanor Rossevelt</div>
				</div>
				<div className="contactInfoContainer">
					<span className="fb"></span>
					<span className="whatsapp"></span>
					<span className="twitter"></span>
				</div>
				<div className="rights">
					www.mikew.io ©2016 todos los derechos reservados. Bogotá D.C., Colombia	
				</div>
			</footer>
		)
	}
};

module.exports = Footer;
