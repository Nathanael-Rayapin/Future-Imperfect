import PropTypes from "prop-types";
import "./Article.scss";

const Article = ({ article }) => {
  return (
    <article className="article col-12 mb-5">
      {/* Header */}
      <div className="header d-flex align-items-center bg-white">
        <div className="section-title d-flex justify-content-center flex-column col-8 h-100 px-5">
          <h1 className="mb-4">{article.title}</h1>
          <p className="custom-p">{article.sub_title}</p>
        </div>
        <div className="section-infos d-flex justify-content-center align-items-end flex-column col-4 h-100 pe-5">
          <p className="date">{article.date}</p>
          <div className="profile d-flex align-items-center">
            <div className="name me-3">
              <p className="custom-p mb-0">{article.author}</p>
            </div>
            <div className="avatar">
              <img
                className="w-100 h-100"
                src={article.avatar}
                alt="Author Avatar"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="body p-5 bg-white">
        <div className="cover col-12">
          <img
            className="cover-article w-100 h-100"
            src={article.cover}
            alt="Cover Article"
          />
        </div>
        <div className="content col-12 my-5">
          <p>{article.content}</p>
        </div>
      </div>
      {/* Footer */}
      <div className="footer d-flex justify-content-between align-items-center px-5 pb-5 bg-white">
        <div className="next-lecture col-4">
          <button className="btn px-5">Continue Reading</button>
        </div>
        <div className="mentions d-flex justify-content-between align-items-center col-3">
          <p className="mb-0">General</p>
          <div className="likes">
            <i className="bi bi-heart-fill me-2"></i>
            <span>{article.likes}</span>
          </div>
          <div className="comments">
            <i className="bi bi-chat-fill me-2"></i>
            <span>{article.comments}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.any.isRequired,
};

export default Article;
