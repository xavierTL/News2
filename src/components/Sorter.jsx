import React, { Component } from 'react';
import '../styles/controller.css';

class Sorter extends Component {
  state = {
    option: 'title'
  };
  render() {
    return (
      <div className="sortContainer">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="title">Title</option>
              <option value="votes">Popularity</option>
              <option value="created_at">Recent</option>
              <option value="comment_count">Comments</option>
            </select>
          </label>
          <input type="submit" value="Submit" className="submit" />
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
