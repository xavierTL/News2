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
                <option value="title">title</option>
                <option value="votes">popularity</option>
                <option value="created_at">recent</option>
                <option value="comment_count">comments</option>
              </select>
            </label>
          </div>
          <div className="submitContainer">
            <input type="submit" value="sort" className="submit" />
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
