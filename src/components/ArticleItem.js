import { Link } from "react-router-dom";

import { incrementVote } from "../utils/api";

export default function ArticleItem({ article, setArticles }) {

  function replaceArticle(currentArticles, newArticle, article_id) {
    return currentArticles.map( article => {
      if (article.article_id === article_id) {
        return newArticle
      }
      else {
        return article;
      };
    });
  }

  function handleUpVoteClick(event) {
    const targetArticleId = Number.parseInt(event.target.value);
    const originalArticle = { ...article };
    const newArticle = { ...article, votes: article.votes += 1 };

    setArticles( currentArticles => 
      replaceArticle(currentArticles, newArticle, targetArticleId));

    incrementVote(targetArticleId)
      .catch( err => {
        // API call failed to up vote an article revert back
        setArticles( currentArticles =>
          replaceArticle(currentArticles, originalArticle, targetArticleId));
      });
  }

  return (
    <section id="article-item">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>
        <label>Reviews&nbsp;{article.comment_count}</label>
        <Link to={`/articles/${article.article_id}/add_review`}>Add Review</Link>
        Votes&nbsp;{article.votes}
        <button onClick={handleUpVoteClick} value={article.article_id}>Up Vote</button>
      </p>
      <ul>
        <li><Link to={`/articles/${article.article_id}`}>Detail</Link></li>
        <li><Link to={`/articles/${article.article_id}/reviews`}>Reviews</Link></li>
      </ul>
    </section>
  );
}