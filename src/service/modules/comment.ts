import fkRequest from "..";

export function addCommentLike(
  userId: string,
  momentId: string,
  commentId: string
) {
  return fkRequest.get({
    url: `/comment/add/comment_like`,
    params: { userId, momentId, commentId }
  });
}

export function deleteCommentLike(
  userId: string,
  momentId: string,
  commentId: string
) {
  return fkRequest.get({
    url: `/comment/delete/comment_like`,
    params: { userId, momentId, commentId }
  });
}

export function publishComment(
  content: string,
  momentId: string,
  commentId?: string,
  commentToCommentId?: string | null
) {
  return fkRequest.post({
    url: "/comment/publish",
    data: {
      content,
      commentToCommentId,
      moment_id: momentId,
      comment_id: commentId
    }
  });
}
