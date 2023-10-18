import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from './contexts/user.context';

import PageNotFound from "./components/PageNotFound";
import HeaderNav from "./components/HeaderNav";

import HomePage from "./HomePage";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";
import ReviewsList from "./components/ReviewsList";
import AddReview from "./components/AddReview";
import AuthorsList from "./components/AuthorsList";

// CSS Styling
//import "./App.css";

// Tailwind Styling
import "./styles.css"

// Persist local User
let initialUser;
try {
  initialUser = JSON.parse(localStorage.getItem("userctx")) ?? null;
} 
catch {
  console.error("Unable to parse user from storage into JSON.");
  initialUser = null;
}

function App() {
  const [currentUser, setCurrentUser] = useState(initialUser);

  useEffect( () => {
    if (currentUser) {
      localStorage.setItem("userctx", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <div className="container p-0 m-0 text-2xl text-blue-700 bg-amber-300"
    // style={{
    //   background: "url(http://some-website.com/public/wallpaper.jpg)",
    // }}
    >
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser}} >
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
