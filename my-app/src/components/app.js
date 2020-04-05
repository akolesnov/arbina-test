import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavigationBar from './navigation-bar';
import Table from './table';
import { addItem } from '../actions/tableActions';

import './app.css';

class App extends Component {
	state= {
		search: '',
	}
	onSearchChange=(search)=>{
		this.setState({search});
	}
	searchItems({ items}, search) {
		if(search.length === 0){
			return items;
		}
		return items.filter((item) => {
			return item.toLowerCase().indexOf(search.toLowerCase()) > -1;
		});
	}
	
	render() {
		const{items, addItem,} = this.props;
		const{search} = this.state;
		const filteredItems = this.searchItems({items}, search);

		return(
			<div>
				<NavigationBar 
					addItem= {addItem}
					onSearchChange= {this.onSearchChange}
				/>
				<Table items= {filteredItems} />
			</div>
		)
	}
}

const mapStateToProps = store => { 
	return {
		items: store.items,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addItem: items => dispatch(addItem(items)),
	}
} 
export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App);