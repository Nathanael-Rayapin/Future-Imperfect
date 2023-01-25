import ArticleLists from "./components/article-lists/Article-Lists";

import "./Page.css";

const Page = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-evenly custom-margin">
          <div className="aside-article col-2"></div>
          <div className="main-article col-7">
            <ArticleLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
