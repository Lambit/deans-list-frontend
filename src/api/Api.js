import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

export const SAND_TOKEN = process.env.REACT_APP_SANDBOX_ACCESS_TOKEN; 
export const SAND_ID = process.env.REACT_APP_SANDBOX_APPLICATION_ID;
export const LOCAL_ID = process.env.REACT_APP_LOCATION_ID;
export const SQ_ID = process.env.REACT_APP_SQUARE_APPLICATION_ID; 
export const SQ_TOKEN = process.env.REACT_APP_SQUARE_ACCESS_TOKEN;


/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
class DeansListApi {

      // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);

      const url = `${BASE_URL}/${endpoint}`;
      const headers = { Authorization: `Bearer ${DeansListApi.token}` };
      const params = (method === "get")
          ? data
          : {};

      try {
        return (await axios({ url, method, data, params, headers })).data;
      } catch (err) {
        console.log(headers);
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    // Individual API routes

    /** Get the current user. */

    static async getCurrentUser(username) {
      console.log(username);
      let res = await this.request(`users/${username}`);
      return res.user;
    }

    /** Get token for login from username, password. */

    static async login(data) {
      console.log(data);
      let res = await this.request(`auth/login`, data, "post");
      console.log(res.token);
      return res.token;
    }

    /** Signup for site. */

    static async signup(data) {
      console.log(data);
      let res = await this.request(`auth/register`, data, "post");
      return res.token;
    }

    /** Save user profile page. */

    static async saveProfile(username, data) {
      console.log(username, data);
      let res = await this.request(`users/${username}`, data, "patch");
      return res.user;
    }

} 

export default DeansListApi;