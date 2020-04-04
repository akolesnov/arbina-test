import React from 'react';
// import { Cell, Column, Table } from "@blueprintjs/table";
import './table.css';

const Tables = ({items}) => {
	const elements = items.map((item) => 
		<li key={item.toString()} >{item}</li>
	);
	
	return(
		<ul>{elements}</ul>
	)
}

export default Tables;
