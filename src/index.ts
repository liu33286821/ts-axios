import { RequestConfig } from "./types";
import xhr from "./xhr";

function axios (config: RequestConfig):void {
  // TODO: CONFIG
  xhr(config);
}

export default axios;