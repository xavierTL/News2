import React from 'react';
import '../styles/buttons.css';

const Voter = ({ toggleVotes }) => {
  return (
    <div className="voter">
      <div className="voteContainer">
        <button onClick={() => toggleVotes(-1)} className="voteButton">
          <div className="inner"> - </div>
        </button>{' '}
      </div>
      <div className="vote">vote</div>
      <div className="voteContainer">
        <button onClick={() => toggleVotes(1)} className="voteButton">
          <div className="inner"> + </div>
        </button>
      </div>
    </div>
  );
};

export default Voter;
