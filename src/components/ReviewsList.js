import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../utils/api";

import ArticleItem from "./ArticleItem";


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

 /* {
    "comment_id": 169,
    "votes": 6,
    "created_at": "2020-09-19T17:11:00.000Z",
    "author": "happyamy2016",
    "body": "Adipisci numquam eum maiores veniam qui praesentium. Veniam atque neque dolores. Voluptates doloremque eos corrupti. Vero minima nesciunt reprehenderit et eius unde a unde iusto. Architecto praesentium eum impedit. Ipsa officia ut ea sint autem nulla."
}*/
  return (
      <section id='reviews-list'>
          <h2>Reviews</h2>
          {reviews.map( review => <div key={review.comment_id}>{review.votes}{review.author}{review.created_at}{review.body}</div>)}
      </section>);
}
