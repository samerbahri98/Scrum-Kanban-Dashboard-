import React, { Component, Fragment } from "react";
import TaskUpdate from "./TaskUpdate";

export default class Task extends Component {
  state = {
    updateTask: false
  };

  update = () => {
    this.setState({ updateTask: true });
  };
  submitUpdate = obj => this.props.submitUpdate(obj);
  cancelUpdate = () => this.setState({ updateTask: false });
  delete = () => this.props.delete(this.props.obj.id);
  drag = () => this.props.drag(this.props.obj.id);
  dragend = () => this.props.dragend(this.props.obj.id);
  drop = () => this.props.drop(this.props.obj.id);

  render() {
    let C = "Task notification ";
    switch (this.props.obj.priority) {
      case "Low":
        C += "is-success";
        break;
      case "Medium":
        C += "is-primary";
        break;
      case "High":
        C += "is-warning";
        break;
      case "Urgent":
        C += "is-danger";
        break;
    }
    return (
      <div
        className={C}
        draggable="true"
        onDrag={this.drag}
        onDragEnd={this.dragend}
        onDrop={this.drop}
      >
        {this.state.updateTask ? (
          <TaskUpdate
            allowedCat={this.props.allowedCat}
            obj={this.props.obj}
            cancelUpdate={this.cancelUpdate}
            submitUpdate={this.submitUpdate}
          ></TaskUpdate>
        ) : (
          <Fragment></Fragment>
        )}
        <button className="delete" onClick={this.delete}></button>
        <span className="icon is-left ">
          <i className="fa fa-pencil target" onClick={this.update}></i>
        </span>
        <label onClick={this.update} className="target">
          {this.props.obj.name}
        </label>
        <br />
        <span className="tag">{this.props.obj.owner}</span>
        <br />
        <em>{this.props.obj.priority}</em>
        <br />
        <label>
          <span className="icon is-left ">
            <i className="fa fa-calendar"></i>{" "}
          </span>
          {this.props.obj.deadline.toLocaleDateString("en-US")}
        </label>
      </div>
    );
  }
}
