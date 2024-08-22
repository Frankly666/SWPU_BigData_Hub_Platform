import { IUserInfo } from "@/type/users";
import fkRequest from "..";

export function enroll(userInfo: IUserInfo) {
  return fkRequest.post({
    url: `/users/enroll`,
    data: userInfo
  });
}
