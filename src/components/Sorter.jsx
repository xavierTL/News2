import React, { Component } from 'react';
import '../styles/controller.css';

class Sorter extends Component {
  state = {
    option: 'title'
  };
  render() {
    return (
      <div className="sortContainer">
        <form onSubmit={this.handleSubmit} className="sortForm">
          <div className="selectContainer">
            <label className="selectLabel">
              <select
                value={this.state.value}
                onChange={this.handleChange}
                className="select"
              >
                <option value="title">Title</option>
                <option value="votes">Popularity</option>
                <option value="created_at">Recent</option>
                <option value="comment_count">Comments</option>
              </select>
            </label>
          </div>
          <div className="submitContainer">
            <input type="submit" value="Submit" className="submit" />
          </div>
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
