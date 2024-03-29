import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://be-lh-news.onrender.com",
});

/*** Topics Endpoint */
export function getTopics() {
  return newsAPI
    .get("/api/topics")
    .then( response => {
      return response.data.topics;
    });
}

/*** Articles Endpoint */
export function getArticles(sortBy = 'created_at', order = 'desc', topic = '') {
  const urlPath = `/api/articles?sort_by=${sortBy}&order=${order}&topic=${topic}`;
  return newsAPI
    .get(urlPath)
    .then( response => {
      return response.data.articles;
    });
}

export function getArticleById(article_id) {
  return newsAPI
    .get(`/api/articles/${article_id}`)
    .then( response => {
      return response.data.article;
    });
}

export function incrementVote(article_id) {
  return newsAPI
    .patch(`/api/articles/${article_id}`, { inc_votes: 1 } )
    .then( response => {
      return response.data.article;
    });
}

/*** Reviews aka Comments Endpoint */
export function getReviews(article_id) {
  return newsAPI
    .get(`/api/articles/${article_id}/comments`)
    .then( response => {
      return response.data.comments;
    });
}

export function postReview(article_id, newReview) {
  return newsAPI
    .post(`/api/articles/${article_id}/comments`, newReview )
    .then( response => {
      return { status: response.status, statusText: response.statusText };
    });
}

export function deleteReview(review_id) {
  return newsAPI
    .delete(`/api/comments/${review_id}`)
    .then( response => {
      return { status: response.status, statusText: response.statusText };
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

/*** Users Endpoint */
export function getUsers() {
  const urlPath = `/api/users`;
  return newsAPI
    .get(urlPath)
    .then( response => {
      console.log(response)
      return response.data.users;
    });
}

export function getUserById(userToken) {
  return newsAPI
    .get(`/api/users/${userToken.username}`, { headers: { Authorization: `Bearer ${userToken.token}`}})
    .then( response => {
      return response.data.user;
    });
}

export function signIn(username) {
  return newsAPI
    .post(`/auth/signin`, username )
    .then( response => {
      return response.data.token;
    });
  }

/* Not implemented yet
export function postUser(newUser) {
  return newsAPI
    .post(`/users`, newUser )
    .then( response => {
      return { status: response.status, statusText: response.statusText };
    });
}*/