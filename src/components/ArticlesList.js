import { useEffect } from "react";
import { getArticles  } from "../utils/api";

export default function ArticlesList() {

    useEffect( ()=>{
    getArticles().then((rtn)=>{
        //console.log(rtn);
    });
}, []);

    return (
        <section id='article-list'>
            <h2>Articles</h2>
        </section>
    );
}