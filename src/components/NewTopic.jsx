import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/NewTopic.css';

class NewTopic extends Component {
  state = {
    newTopic: '',
    description: '',
    response: false
  };
  render() {
    return (
      <div className="formContainer">
        {!this.state.response ? (
          <div className="formInner">
            <form className="topicForm" onSubmit={this.handleSubmit}>
              <label>
                <div className="topicFormInner">
                  <div className="topicFormInner2">
                    <div className="topicFormText">your new topic</div>
                    <input
                      className="commentField topicInput"
                      id="newTopic"
                      type="text"
                      value={this.state.newTopic}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="topicFormInner2">
                    <div className="topicFormText">description</div>
                    <input
                      className="commentField topicInput"
                      id="description"
                      type="text"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div />
                </div>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        ) : (
          <p>your topic was posted!</p>
        )}
      </div>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { description } = this.state;
    const slug = this.state.newTopic;
    const input = {
      slug,
      description
    };
    api.postNewTopic(input).then(() => {
      this.setState({ response: true }, () => {
        this.props.updateTopics();
      });
    });
  };
}

export default NewTopic;
