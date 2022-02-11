import { deleteReview } from "../utils/api";

export default function ReviewItem({ review, setReviews, setErrors, currentUser }) {

  function handleDeleteClick(event) {
    const review_id = Number.parseInt(event.target.value);

    deleteReview(review_id)
      .then( (response) => {
        if (response.status === 204) {
          setReviews( currentReviews => 
            currentReviews
              .filter( review => review.comment_id !== review_id ));
        } else {
          setErrors(currentErrors => [...currentErrors, { message: `Failed to delete review with ${review_id}.`}])
        };
      });
  }

  return (
    <section id="review-item">
      <ul>
        <li>{review.votes}</li>
        <li>{review.author}</li>
        <li>{review.created_at}</li>
        <li>{review.body}</li>
        {review.comment_id}
        { (currentUser === review.author) 
        ? <li><button onClick={handleDeleteClick} value={review.comment_id}>Delete</button></li>
        : null }
      </ul>
    </section>
  );
}
