import React, { Component } from 'react';

class Sorter extends Component {
  state = {
    option: ''
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sort by...
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="title">Title</option>
              <option value="votes">Popularity</option>
              <option value="created_at">Recent</option>
              <option value="comment_count">Comments</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.toggleSort(this.state.option);
  };
  handleChange = event => {
    this.setState({ option: event.target.value });
  };
}

export default Sorter;
