import React from "react";
import "./ViewUser.css";
import PropTypes from "prop-types";
function ViewUser(props) {
  return (
    <div>
      <div className="ViewUI">
        <img
          className="avatar"
          src={props.avatar}
          alt={"Avatar for " + props.username}
        />
        <h2 className="username">User : {props.username}</h2>
        {props.children}
      </div>
    </div>
  );
}

ViewUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default ViewUser;
