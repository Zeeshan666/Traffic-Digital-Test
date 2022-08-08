import { BASE_URL } from "./Constant";
import request from "../requests";

function getGistByUser(username) {
  return request({
    url: `${BASE_URL}/users/${username}/gists`,
    method: "GET",
  });
}
function gistById(gistId) {
  return request({
    url: `${BASE_URL}/gists/${gistId}`,
    method: "GET",
  });
}
const githubApi = {
  getGistByUser,
  gistById,
};

export default githubApi;
