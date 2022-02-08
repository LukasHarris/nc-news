export default function Article({ article }) {
  return (
    <section id="article-item">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </section>
  );
}