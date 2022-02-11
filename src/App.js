import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext } from './contexts/user.context';

import PageNotFound from "./components/PageNotFound";
import HeaderNav from "./components/HeaderNav";

import HomePage from "./HomePage";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";
import ReviewsList from "./components/ReviewsList";
import AddReview from "./components/AddReview";
import AuthorsList from "./components/AuthorsList";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }} >
          <HeaderNav />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/articles" element={<ArticlesList />}></Route>
            <Route path="/articles/:article_id" element={<ArticleDetail />} />
            <Route path="/articles/:article_id/reviews" element={<ReviewsList />} />
            <Route path="/articles/:article_id/add_review" element={<AddReview />} />
            {/* <Route path="/articles/:article_id/comments/:comment_id" element={<Reviews />} />*/}
            <Route path="/authors" element={<AuthorsList />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
