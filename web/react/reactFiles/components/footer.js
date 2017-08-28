'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {

	render() {

		var motoText = this.props.moto ? this.props.moto.text : "loading...";
		var motoAuthor = this.props.moto ? this.props.moto.author : "loading..."

		return (
			<footer>
				<div className="moto">
					<div className="text">"{motoText}"</div>
					<div className="by">- {motoAuthor}</div>
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

Footer.propTypes = {
	moto: PropTypes.object,
}

export default Footer;
