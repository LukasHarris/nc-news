import { Link } from "react-router-dom";

export default function Article({ article }) {
  return (
    <section id="article-item">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <ul>
        <li><Link to={`/articles/${article.article_id}`}>Detail</Link></li>
        <li><Link to={`/articles/${article.article_id}/reviews`}>Reviews</Link></li>
      </ul>
    </section>
  );
}