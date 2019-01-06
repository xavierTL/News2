import React, { Component } from 'react';
import '../styles/controller.css';
import Sorter from './Sorter';

class ArticleController extends Component {
  render() {
    const { toggleSort, toggleAscending, isASC } = this.props;
    return (
      <div className="controlOuter">
        <div className="controlContainer">
          <Sorter toggleSort={toggleSort} />
          <div className="ascContainer">
            <button className="ascButton" onClick={() => toggleAscending()}>
              {isASC ? 'Ascending' : 'Descending'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleController;
