import PropTypes from "prop-types";
import "./Aside-Article.scss";

const AsideArticle = ({ asideArticle }) => {
  return (
    <div className="aside mb-5">
      <div className="header">
        <img className="w-100 h-100" src={asideArticle.cover} alt="Article" />
      </div>
      <div className="aside-info d-flex justify-content-between align-items-center bg-white p-4">
        <div className="aside-title-date">
          <p className="mb-2">{asideArticle.title}</p>
          <p className="mb-0">{asideArticle.date}</p>
        </div>
        <div className="aside-avatar">
          <img className="w-100 h-100" src={asideArticle.avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

AsideArticle.propTypes = {
  asideArticle: PropTypes.any.isRequired,
};

export default AsideArticle;
