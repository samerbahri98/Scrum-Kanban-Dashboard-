import React, { Component, Fragment } from "react";

export default class Tab extends Component {
  select = event => {
    this.props.activate(this.props.obj.id);
  };
  remove = () => {
    if ( window.confirm( `Do you want to delete all the ${this.props.obj.name} Category?`) )
    {
      this.props.removeTab(this.props.obj.id);
    }
  };
  render() {
    return (
      <a onClick={this.select} className={this.props.active}>
        {this.props.obj.name === "All" ? (
          <Fragment></Fragment>
        ) : (
          <button
            className="delete is-small"
            aria-label="close"
            onClick={this.remove}
          ></button>
        )}
        {this.props.obj.name}
      </a>
    );
  }
}
