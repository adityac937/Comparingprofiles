import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ViewUser from "../ViewUser/ViewUser";
import "./Compare.css";

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;
    this.setState(function () {
      return {
        username: value,
      };
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          className="focus-border"
          id="username"
          placeholder="Git Username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.prototypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

class Compare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      let newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function () {
      let newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  }
  render() {
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput id="playerOne" label="" onSubmit={this.handleSubmit} />
          )}

          {playerOneImage !== null && (
            <ViewUser avatar={playerOneImage} username={playerOneName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, "playerOne")}
              >
                Change Username
              </button>
            </ViewUser>
          )}

          {!playerTwoName && (
            <PlayerInput id="playerTwo" label="" onSubmit={this.handleSubmit} />
          )}

          {playerTwoImage !== null && (
            <ViewUser avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, "playerTwo")}
              >
                Change Username
              </button>
            </ViewUser>
          )}
        </div>

        {playerOneImage && playerTwoImage && (
          <Link
            className="CompareButton"
            to={{
              pathname: match.url + "/results",
              search:
                "?playerOneName=" +
                playerOneName +
                "&playerTwoName=" +
                playerTwoName,
            }}
          >
            Compare Now
          </Link>
        )}
      </div>
    );
  }
}

export default Compare;
