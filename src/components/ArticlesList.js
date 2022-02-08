import { useState, useEffect } from "react";

import { getArticles } from "../utils/api";

import ArticleItem from "./ArticleItem";

export default function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    //TODO Topics??

    useEffect(() => {
        getArticles().then( articles => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, [isLoading]); 

    // TODO Add spinner component and add to pages
    if (isLoading) return <h2>Loading...</h2>;
    if (articles.length === 0) return <h2>No Articles Found</h2>

    return (
        <section id='article-list'>
            <h2>Articles</h2>
            {articles.map( article => 
                <ArticleItem key={article.article_id} article={article}></ArticleItem>
            )}
        </section>
    );
}