import Article from "../article/Article";
import { ARTICLES_DATAS } from "./Article-Lists-Data";

const ArticleLists = () => {
  return (
    <div className="articles-lists">
      {ARTICLES_DATAS.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </div>
  );
};

export default ArticleLists;
