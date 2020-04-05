import React, { Component } from 'react';
import { Button } from "@blueprintjs/core";

export default class AddButton extends Component {
	
  
	render (){
		return(
			<Button 
				text="+"
				className="bp3-button"
				onClick={this.props.addItem}
			/>
		);
	}	
}

