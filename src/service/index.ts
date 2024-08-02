import { BASE_URL, TIME_OUT } from "./config";
import FKRequest from "./request";

const fkRequest = new FKRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    }
  }
});

export default fkRequest;
