import { useState } from "react";

function Comment({ comment }) {
  const [likeData, setLikeData] = useState({
    upvotes: 0,
    downvotes: 0,
  });

  function updateLikeData(e) {
    const name = e.target.name;
    const value = likeData[name];

    setLikeData({
      ...likeData,
      [name]: value + 1,
    });
  }

  return (
    <>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
      <button onClick={updateLikeData} name="upvotes">
        {likeData.upvotes}👍
      </button>
      <button onClick={updateLikeData} name="downvotes">
        {likeData.downvotes}👎
      </button>
    </>
  );
}

export default Comment;
