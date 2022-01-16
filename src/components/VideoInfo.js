function VideoInfo({
  views,
  uploadDate,
  upvotes,
  downvotes,
  updateLikes,
  hideComments,
  commentsState,
}) {
  return (
    <>
      <p>
        {views} Views | Uploaded {uploadDate}
      </p>
      <span>
        <button name="upvotes" onClick={updateLikes}>
          {upvotes}👍
        </button>
        <button name="downvotes" onClick={updateLikes}>
          {downvotes}👎
        </button>
      </span>
      <br></br>
      <br></br>
      <button onClick={commentsState}>
        {hideComments ? "Show" : "Hide"} Comments
      </button>
    </>
  );
}

export default VideoInfo;
