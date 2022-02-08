import { useEffect } from "react";

import { getArticleById } from "../utils/api";

export default function ArticleDetail() {
  useEffect( ()=>{
    getArticleById().then( article => {
      console.log('art', article);
    } );
  }, []); 

  return (<h2>Article Detail</h2>);
}