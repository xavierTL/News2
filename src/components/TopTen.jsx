import React, { Component } from 'react';
import * as api from '../api/api';
import '../styles/TopTen.css';
import { Link } from '@reach/router';

class TopTen extends Component {
  state = {
    topTen: []
  };
  render() {
    const { topTen } = this.state;
    return (
      <div className="topTenOuter">
        <div className="titleTenContainer">
          <div className="titleTenInner">Top 10!</div>
        </div>
        <div className="containerUl">
          <ul className="topTenUl">
            {topTen.map((article, i) => (
              <div key={i} className="containerLi">
                <div> {i + 1} </div>
                <li className="topTenLi">
                  <Link
                    to={`/articles/${article.article_id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    {article.title}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.fetchTopTen().then(response => {
      this.setState({ topTen: response.articles });
    });
  }
}

export default TopTen;
