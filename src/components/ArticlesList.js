import { useState, useEffect } from "react";

import { getTopics, getArticles } from "../utils/api";

import ArticleItem from "./ArticleItem";
import TopicsDropDown from "./TopicsDropDown";
import SortByDropDown from "./SortByDropDown"

export default function ArticlesList() {
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] = useState([]);
    const [currentTopic, setCurrentTopic] = useState('');
    const [sortBy, setCurrentSortBy] = useState('created_at');
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getTopics().then( topics => {
            setTopics(topics.map( topic => topic.slug));
        });
    }, []);

    useEffect(() => {
        getArticles(sortBy, 'desc', currentTopic).then( articles => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, [isLoading, sortBy, currentTopic]);

    // TODO Add spinner component and add to pages
    if (isLoading) return <h2>Loading...</h2>;
    if (articles.length === 0) return <h2>No Articles Found</h2>

    return (
        <section id='articles-list'>
            <h2>Articles</h2>
            <TopicsDropDown topics={topics} setCurrentTopic={setCurrentTopic} />
            <SortByDropDown setCurrentSortBy={setCurrentSortBy} />
            <p>{articles.length}</p>
            {articles.map( article => 
                <ArticleItem key={article.article_id} article={article} setArticles={setArticles}></ArticleItem>
            )}
        </section>
    );
}
