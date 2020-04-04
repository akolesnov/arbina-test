import React, { Component } from 'react';
import NavigationBar from '../navigation-bar/navigation-bar.js';
import Tables from '../table/table.js';

import './app.css';

export default class App extends Component {
	state= {
		items: [
			'Salamaleikum',
			'Hello World',
			'salamaleikum',
			'hello world',
		],
		search: '',
	}
	onSearchChange=(search)=>{
		this.setState({search});
	}
	searchItems(items, search) {
		if(search.length === 0){
			return items;
		}
		return items.filter((item) => {
			return item.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
	}
	addItem = (text) => {
		this.setState(({items}) => {
			const newArr = [
				...items,
				text
			];
			return {
				items: newArr
			};
		})
	}
	render() {
		const{items, search}= this.state;
		const filteredItems = this.searchItems(items, search);

		return(
			<div>
				<NavigationBar 
					onSearchChange={this.onSearchChange}
					addItem={this.addItem}/>
				<Tables items={filteredItems}/>
			</div>
		)
	}
}
 