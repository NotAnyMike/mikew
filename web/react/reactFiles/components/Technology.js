import React from 'react';

function Technology(props){
	return (
		<li>
			<img src={props.img} alt=""></img>
			<span>{props.title}</span>
		</li>
	);
};

export default Technology;
