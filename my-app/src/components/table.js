import React from 'react';

const Table = ({items}) => {
	const elements = items.map((item) => 
		<li key={item.toString()} >{item}</li>
	);
	
	return(
		<ul className="list">{elements}</ul>
	)
	
}

export default Table;
