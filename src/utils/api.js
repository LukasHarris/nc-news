import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-lh-news.herokuapp.com/api",
});

/*** Topics Endpoint */
export function getTopics() {
  return newsAPI
    .get("/topics")
    .then( response => {
      return response.data.topics;
    });
}

/*** Articles Endpoint */
export function getArticles(sortBy = 'created_at', order = 'desc', topic = '') {
  const urlPath = `/articles?sort_by=${sortBy}&order=${order}&topic=${topic}`;
  return newsAPI
    .get(urlPath)
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

/*** Authors Endpoint */
export function getAuthors() {
  // TODO Implement users endpoint within API
  const authors = {};
  return getArticles().then( articles => {
    return articles;
  })
  .then( articles => {
    articles.forEach( article => {
      authors[article.author] = article.author;
    });
    return Object.keys(authors);
  });
}