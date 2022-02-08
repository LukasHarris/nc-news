import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-lh-news.herokuapp.com/api",
});

export function getArticles() {
  return newsAPI.get("/articles").then( response => {
    return response.data.articles;
  });
}

export function getArticleById(article_id) {
  return newsAPI.get(`/articles/${article_id}`).then( response => {
    console.log('res id:',response)
    return response.data.article;
  });
}
