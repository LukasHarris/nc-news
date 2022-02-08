import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../utils/api";

export default function ArticleDetail() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticleById(article_id).then(article => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [isLoading]);

  // TODO Add spinner component and add to pages
  if (isLoading) return <h2>Loading...</h2>;
  if (!article) return <h2>No Articles Found</h2>;

  const {
    author,
    title,
    article_id: art_id,
    body,
    topic,
    created_at,
    votes,
    comment_count
  } = article;

  return (
    <section id='article-detail'>
      <ul>
        <li><h2>Article Detail</h2></li>
        <li><h3>{title}</h3></li>
        <li><span className=''>Author: </span><span>{author}</span></li>
        <li><span className=''>Auhtor-ID: </span><span>{art_id}</span></li>
        <li><span className=''>Body: </span><span>{body}</span></li>
        <li><span className=''>Topic: </span><span>{topic}</span></li>
        <li><span className=''>created_at: </span><span>{created_at}</span></li>
        <li><span className=''>votes: </span><span>{votes}</span></li>
        <li><span className=''>comment_count: </span><span>{comment_count}</span></li>
      </ul>
    </section>);
}