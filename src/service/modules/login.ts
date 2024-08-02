import { IUserAccount } from "@/type/users";
import fkRequest from "..";

export function getUserInfo(data: IUserAccount) {
  return fkRequest.post({
    url: "/login",
    data
  });
}
