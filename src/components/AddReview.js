import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { postReview } from "../utils/api";

export default function AddReview() {
  const { article_id } = useParams();
//  const [ newComment, setNewComment ] = useState();
  const [ author, setAuthor ] = useState();
  const [ body, setBody ] = useState();

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

    console.log('Sbmitted Form ', { username: author, body} );

    postReview(article_id, { author, body}).then( review => { 
      console.log('POSTED comment', review);
      
    }).catch( err => console.log("ERRRROOOOOOORRRRRRR", err))

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