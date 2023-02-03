import { Fragment } from "react";
import ThumbnailArticle from "../thumbnail-article/Thumbnail-Article";
import { Thumbnail_Article_Data } from "./Thumbnail-Article-Lists-Data";

const ThumbnailArticleLists = () => {
  return (
    <Fragment>
      {Thumbnail_Article_Data.map((thumbnail) => {
        return <ThumbnailArticle key={thumbnail.id} thumbnail={thumbnail} />;
      })}
    </Fragment>
  );
};

export default ThumbnailArticleLists;
