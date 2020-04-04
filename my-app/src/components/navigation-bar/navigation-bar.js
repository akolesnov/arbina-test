import React from 'react';
import { Navbar } from "@blueprintjs/core";
import AddButton from '../add-button/add-button.js';
import SearchInput from '../search-input/search-input.js';

import './navigation-bar.css';

function NavigationBar({search, onSearchChange, addItem}){
	
	return(
		<Navbar className="nav.bp3-navbar nav">
			<SearchInput 
				onSearchChange={onSearchChange}/>
			<AddButton 
				addItem={addItem}
			/>
		</Navbar>
	);
}
export default NavigationBar;