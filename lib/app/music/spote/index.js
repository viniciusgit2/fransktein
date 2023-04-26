import { url } from "./config";
import { headher } from "./config";

export default class spots {
  constructor(options) {
    this.url = options.url || url;
    this.token = options.token;
  }

}