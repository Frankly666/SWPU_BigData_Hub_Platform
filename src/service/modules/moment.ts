import fkRequest from "..";

export function getMoments() {
  return fkRequest.get({
    url: "/moment/search/list"
  });
}

export function deleteMomentLike(userId: string, momentId: string) {
  return fkRequest.get({
    url: "/moment/drop/moment_like",
    params: { userId, momentId }
  });
}

export function deleteMomentFavor(userId: string, momentId: string) {
  return fkRequest.get({
    url: "/moment/drop/moment_favor",
    params: { userId, momentId }
  });
}

export function addMomentLike(userId: string, momentId: string) {
  return fkRequest.get({
    url: "/moment/add/moment_like",
    params: { userId, momentId }
  });
}

export function addMomentFavor(userId: string, momentId: string) {
  return fkRequest.get({
    url: "/moment/add/moment_favor",
    params: { userId, momentId }
  });
}

export function deleteMoment(momentId: number) {
  return fkRequest.get({
    url: `/moment/delete/${momentId}`
  });
}
