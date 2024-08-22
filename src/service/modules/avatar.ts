import fkRequest from "..";

export function deleteTemAvatar(realName: string) {
  return fkRequest.get({
    url: `/file/avatar/init/delete/${realName}`
  });
}

export function initAvatar(formdata: any, userId: string) {
  return fkRequest.post({
    url: `/file/avatar/initReal/${userId}`,
    data: formdata
  });
}
