import fkRequest from "..";

export function publishArticle(
  title: string,
  content: string,
  category: string
) {
  return fkRequest.post({
    url: "/article/publish",
    data: { title, content, category }
  });
}

export function uploadArticleCover(formdata: FormData, articleId: number) {
  return fkRequest.post({
    url: `/article/cover/${articleId}`,
    data: formdata
  });
}
