import fkRequest from "..";

export function publishArticle(title: string, content: string) {
  return fkRequest.post({
    url: "/article/publish",
    data: { title, content }
  });
}
