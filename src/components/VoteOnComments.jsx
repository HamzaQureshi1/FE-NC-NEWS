import React from "react";

const VoteOnComments = () => {
  return (
    <div>
      <div>
        <button type="button" onClick={handleChange} value={1}>
          Upvote Comment
        </button>
        <button type="button" onClick={handleChange} value={-1}>
          Downvote Comment
        </button>
      </div>
    </div>
  );
};

const handleChange = event => {
  console.log(1);
};

export default VoteOnComments;
