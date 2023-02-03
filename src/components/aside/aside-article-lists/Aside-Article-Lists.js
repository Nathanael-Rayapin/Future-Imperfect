import { Fragment } from "react";
import AsideArticle from "../aside-article/Aside-Article";
import { ASIDE_ARTICLE_DATA } from "./Aside-Article-Lists-Data";

const AsideArticleLists = () => {
  return (
    <Fragment>
      {ASIDE_ARTICLE_DATA.map((asideArticle) => {
        return (
          <AsideArticle key={asideArticle.id} asideArticle={asideArticle} />
        );
      })}
    </Fragment>
  );
};

export default AsideArticleLists;
