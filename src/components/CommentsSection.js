import Comment from "./Comment";

function CommentsSection({ comments }) {
  const commentsList = comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));

  return (
    <div>
      <h2>{comments.length} Comments</h2>
      {commentsList}
    </div>
  );
}

export default CommentsSection;
