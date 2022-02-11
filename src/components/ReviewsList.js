import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../utils/api";

import ReviewItem from '../components/ReviewItem';

export default function ReviewsList() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(article_id).then( reviews => {
          setReviews(reviews);
          setIsLoading(false);
      });
  }, [isLoading]);

  // TODO Add spinner component and add to pages
  if (isLoading) return <h2>Loading...</h2>;
  if (reviews.length === 0) return <h2>No Reviews Found</h2>

  return (
      <section id='reviews-list'>
          <h2>Reviews</h2>
          {reviews.map( review => <ReviewItem key={review.comment_id} review={review} setReviews={setReviews} />)}
      </section>);
}
