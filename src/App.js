import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import PageNotFound from "./components/PageNotFound";
import HeaderNav from "./components/HeaderNav";

import HomePage from "./HomePage";
import ArticlesList from "./components/ArticlesList";
import ArticleDetail from "./components/ArticleDetail";
import ReviewsList from "./components/ReviewsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route path="/articles/:article_id" element={<ArticleDetail />} />
          <Route path="/articles/:article_id/reviews" element={<ReviewsList />} />
          {/* <Route path="/articles/:article_id/comments/:comment_id" element={<Reviews />} />
          <Route path="/users" element={<UsersList />}></Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
