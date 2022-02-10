import { useState, useEffect } from "react";

import { getTopics, getArticles } from "../utils/api";

import ArticleItem from "./ArticleItem";
import TopicsDropDown from "./TopicsDropDown";

export default function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] = useState([]);
    const [currentTopics, setCurrentTopics] = useState('all');
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        getTopics().then( topics => {
            setTopics(topics.map( topic => topic.slug));
        });
    }, [])

    useEffect(() => {
        getArticles().then( articles => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, [isLoading]);

    const filteredArticles = articles.filter( article => 
        currentTopics === 'all' || article.topic === currentTopics
    );

    // TODO Add spinner component and add to pages
    if (isLoading) return <h2>Loading...</h2>;
    if (articles.length === 0) return <h2>No Articles Found</h2>

    return (
        <section id='articles-list'>
            <h2>Articles</h2>
            <TopicsDropDown topics={topics} setCurrentTopics={setCurrentTopics} />
            {filteredArticles.map( article => 
                <ArticleItem key={article.article_id} article={article}></ArticleItem>
            )}
        </section>
    );
}