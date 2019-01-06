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
          <div className="titleTenInner">
            Popular articles
            <img
              className="commentIcon trendIcon"
              src={require('../images/trend.svg')}
              alt="comment icon"
            />
          </div>
        </div>
        <div className="containerUl">
          <ul className="topTenUl">
            {topTen.map((article, i) => (
              <div key={i} className="containerLi">
                <div className="itemNumberCont">
                  {' '}
                  <div className="itemNumber">{i + 1}</div>{' '}
                </div>
                <div className="itemTitle">
                  <li className="topTenLi">
                    <Link
                      to={`/articles/${article.article_id}`}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {article.title}
                    </Link>
                  </li>
                </div>
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
