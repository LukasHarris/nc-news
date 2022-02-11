import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { postReview } from "../utils/api";

export default function AddReview() {
  const { article_id } = useParams();
  const [ author, setAuthor ] = useState('');
  const [ body, setBody ] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    setIsLoading(false); 
  }, [isLoading]); 
  
  function handleAuthorChange(event) {
    const { value } = event.target;
    setAuthor(value);
  }

  function handleBodyChange(event) {
    const { value } = event.target;
    setBody(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    postReview(article_id, { author, body, votes: 0, created_at: (new Date()).toISOString() } )
      .then( review => { 
        navigate(`/articles/${article_id}`)
      })
      .catch( err => console.log("ERRRROOOOOOORRRRRRR", err));
  }
  
  // TODO Add spinner component and add to pages
  if (isLoading) return <h2>Loading...</h2>;
// {review.votes}{review.author}{review.created_at}{review.body}
  return (
    <section id="add-review">
      <h2>Add Review - {article_id}</h2>
      <form onSubmit={handleSubmit}>
        <label>Author
          <input type="text" value={author} onChange={handleAuthorChange} />
        </label>
        <label>Review
          <textarea value={body} onChange={handleBodyChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </section>
  );
}