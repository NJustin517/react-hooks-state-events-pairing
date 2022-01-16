// Import Data
import { useState } from "react";
import video from "../data/video.js";

// Import Components
import Video from "./Video.js";
import Header from "./Header.js";
import VideoInfo from "./VideoInfo.js";
import CommentsSection from "./CommentsSection.js";

function App() {
  const [hideComments, setHideComments] = useState(false);
  const [likeData, setLikeData] = useState({
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  });

  function updateLikes(e) {
    const name = e.target.name;
    const value = likeData[name];

    setLikeData({
      ...likeData,
      [name]: value + 1,
    });
  }

  function commentsState() {
    setHideComments(!hideComments);
  }

  return (
    <div className="App">
      <Video url={video.embedUrl} />
      <Header title={video.title} />
      <VideoInfo
        views={video.views}
        uploadDate={video.createdAt}
        upvotes={likeData.upvotes}
        downvotes={likeData.downvotes}
        updateLikes={updateLikes}
        hideComments={hideComments}
        commentsState={commentsState}
      />
      <br></br>
      <br></br>
      <hr></hr>
      {hideComments ? null : <CommentsSection comments={video.comments} />}
    </div>
  );
}

export default App;
