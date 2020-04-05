import React, { Component } from 'react';

export default class SearchInput extends Component {
  onSearchChange = (e) => {
    const search = e.target.value;
    this.props.onSearchChange(search);
  }
  render() {
    // const {onSearchChange} = this.props;
    return (
      <input className="bp3-input .modifier"
            type="text"
            placeholder="Text input" 
            dir="auto"
            // value={this.props.search}
            onChange={this.onSearchChange} 
      />
    );
  };
}