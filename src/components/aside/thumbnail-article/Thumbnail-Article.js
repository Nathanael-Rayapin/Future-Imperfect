import PropTypes from "prop-types";
import { Fragment } from "react";
import "./Thumbnail-Article.scss";

const ThumbnailArticle = ({ thumbnail }) => {
  return (
    <Fragment>
      <div className="thumbnail d-flex p-4">
        <div className="thumbnail-cover me-4">
          <img className="w-100 h-100" src={thumbnail.cover} alt="Cover" />
        </div>
        <div className="thumbnail-info">
          <div className="thumbnail-title">
            <p>{thumbnail.title}</p>
          </div>
          <div className="thumbnail-date">
            <p>{thumbnail.date}</p>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

ThumbnailArticle.propTypes = {
  thumbnail: PropTypes.any.isRequired,
};

export default ThumbnailArticle;
