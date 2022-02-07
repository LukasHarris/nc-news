import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import PageNotFound from "./components/PageNotFound";
import HeaderNav from "./components/HeaderNav";
import HomePage from "./HomePage";
import ArticlesList from "./components/ArticlesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          {/* <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<CommentsList />} />
          <Route path="/articles/:article_id/comments/:comment_id" element={<Comments />} />
          <Route path="/users" element={<UsersList />}></Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
