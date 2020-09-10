import React, { Fragment } from "react";
import { HeartTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./About.css";

function about() {
  return (
    <Fragment>
      <div className="Post">
        <h1>About this Project!</h1>
        <div className="para">
          GitComparer is a website where , it compares Git profiles and Assumes
          which user is more active on Git!<br></br> Basic parametres to judge
          is Number of followers , following & repositories!
        </div>

        <Link to="/compare">
          <button className="ButDesign">Let's Compare</button>
        </Link>

        <p className="para3">
          Designed By Aditya Choudhari with antd
          <HeartTwoTone twoToneColor="#eb2f96" />
        </p>
      </div>
    </Fragment>
  );
}
export default about;
