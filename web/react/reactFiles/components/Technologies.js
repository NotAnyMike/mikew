import React from 'react';
import Technology from './Technology';

function Technologies(props) {
	var techs = []
	if(props.technologies && Array.isArray(props.technologies)){
		props.technologies.map(element => {
			techs.push(<Technology key={element.pk} title={element.title} img={element.img}/>);
		});
	}
	return (
		<div className="techs">
			<span className="title">Technologies used:</span>
			<ul>
				{techs}
			</ul>
		</div>
	);
}

export default Technologies;
