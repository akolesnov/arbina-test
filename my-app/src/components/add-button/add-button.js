import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";
import './add-button.css';

export default class AddButton extends Component {
	
  
	render (){
		return(
			<Button 
				text="+"
				className="bp3-button"
				onClick={() =>  this.props.addItem(new Date().toString())}
			/>
		);
	}	
}

