import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-lh-news.herokuapp.com/api",
});

/*** Articles Endpoint */
export function getArticles() {
  return newsAPI
    .get("/articles")
    .then( response => {
      return response.data.articles;
    });
}

export function getArticleById(article_id) {
  return newsAPI
    .get(`/articles/${article_id}`)
    .then( response => {
      return response.data.article;
    });
}

/*** Reviews aka Comments Endpoint */
export function getReviews(article_id) {
  return newsAPI
    .get(`/articles/${article_id}/comments`)
    .then( response => {
      return response.data.comments;
    });
}
