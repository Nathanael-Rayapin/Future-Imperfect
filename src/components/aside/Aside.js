import { Fragment } from "react";
import AsideArticleLists from "./aside-article-lists/Aside-Article-Lists";
import ThumbnailArticleList from "./thumbnail-article-lists/Thumbnail-Article-Lists";
import About from "./about/About";

import "./Aside.scss";

const Aside = () => {
  return (
    <Fragment>
      <div className="intro">
        <div className="intro-img">
          <img
            className="w-100 h-100"
            src="./assets/img/renard.jpg"
            alt="Image"
          />
        </div>
        <div className="intro-title">
          <h1>
            Future
            <br /> Imperfect
          </h1>
          <p className="py-5">
            Monde Animal - Immersion dans la nature sauvage
          </p>
        </div>
      </div>
      <hr />
      <AsideArticleLists />
      <hr />
      <ThumbnailArticleList />
      <About />
    </Fragment>
  );
};

export default Aside;
