import React, { Component } from 'react';

import './search-input.css';

export default class SearchInput extends Component {
  state ={
    search: ''
  };
  onSearchChange = (e) => {
    const search = e.target.value;
    this.setState({search});
    this.props.onSearchChange(search);
  }
  render() {
    return (
      <input className="bp3-input .modifier"
            type="text"
            placeholder="Text input" 
            dir="auto"
            value={this.state.search}
            onChange={this.onSearchChange} />
    );
  };
}