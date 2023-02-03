import Aside from "../components/aside/Aside";
import Main from "../components/main/Main";

import "./Page.scss";

const Page = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-evenly custom-margin">
          <div className="aside-article col-3">
            <Aside />
          </div>
          <div className="main-article col-7">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
