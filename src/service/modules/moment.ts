import fkRequest from "..";

export function getMoments() {
  return fkRequest.get({
    url: "/moment/search/list"
  });
}
