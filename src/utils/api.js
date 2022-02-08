import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-lh-news.herokuapp.com/api",
});

export function getArticles() {
  return newsAPI.get("/articles").then((res) => {
    //console.log("res", res);
    return res;
  });
}
