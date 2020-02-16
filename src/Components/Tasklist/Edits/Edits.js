import React, { Component } from "react";

export default class Edits extends Component {
  deleteAll = () => this.props.deleteAll();
  displayAdd = () => this.props.displayAdd();
  render() {
    return (
      <div className="nav-center notification">
        <span
          className="button is-medium is-danger is-narrow"
          onClick={this.deleteAll}
        >
          <i className="fa fa-trash"></i>
        </span>
        <span
          className="button is-medium is-success is-narrow"
          onClick={this.displayAdd}
        >
          <i className="fa fa-plus"></i>
        </span>
      </div>
    );
  }
}
