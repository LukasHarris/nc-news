
export default function ReviewItem( {review} ) {
  return (<div>{review.votes}{review.author}{review.created_at}{review.body}</div>);
}