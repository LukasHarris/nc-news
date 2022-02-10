import { useState, useEffect } from "react";

import { getAuthors } from "../utils/api";

export default function AuthorsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  //TODO Topics??

  useEffect(() => {
      getAuthors().then( authors => {
          setAuthors(authors);
          setIsLoading(false);
      });
  }, [isLoading]); 

  // TODO Add spinner component and add to pages
  if (isLoading) return <h2>Loading...</h2>;
  if (authors.length === 0) return <h2>No Authors Found</h2>


//  getAuthors().then( authors => {
//    console.log('users list', authors);
//  });
  

  return (
    <section id='authors-list'>
      <h2>Authors</h2>
      <ul>
        {authors.map( (author, index) => <li key={index}>{author}</li>)}
      </ul>
    </section>
    );
}