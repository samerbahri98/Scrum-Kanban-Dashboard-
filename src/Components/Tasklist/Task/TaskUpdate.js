import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    task: this.props.obj
  };

  cancelUpdate = () => this.props.cancelUpdate();
  submitUpdate = () => {
    let currentState = this.state.task;
    this.props.submitUpdate(currentState);
    this.cancelUpdate();
  };

  taskOnChange = event => {
    let currentState = this.state.task;
    currentState.name = event.target.value;
    this.setState({ task: currentState });
  };

  respOnChange = event => {
    let currentState = this.state.task;
    currentState.owner = event.target.value;
    this.setState({ task: currentState });
  };

  priorityOnChange = event => {
    let currentState = this.state.task;
    currentState.priority = event.target.value;
    this.setState({ task: currentState });
  };

  CategoryOnChange = event => {
    let currentState = this.state.task;
    currentState.category = event.target.value;
    this.setState({ task: currentState });
  };

  deadlineOnChange = event => {
    let currentState = this.state.task;
    currentState.deadline = new Date(event.target.value);
    this.setState({ task: currentState });
  };


  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.cancelUpdate}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Update Task</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.cancelUpdate}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="panel-block is-primary">
              <p className="control has-icon">
                <textarea
                  className="textarea is-small"
                  name="taskContent"
                  id="taskContent"
                  placeholder="Task..."
                  style={{ resize: "none" }}
                  onChange={this.taskOnChange}
                  defaultValue={this.props.obj.name}
                ></textarea>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Responsible"
                  id="responsible"
                  onChange={this.respOnChange}
                  value={this.props.obj.owner}
                />
                <label>Priority:</label>
                <span className="select is-small">
                  <select
                    id="priority"
                    onChange={this.priorityOnChange}
                    defaultValue={this.props.obj.priority}
                  >
                    <option className="selection">Low</option>
                    <option className="selection">Medium</option>
                    <option className="selection">High</option>
                    <option className="selection">Urgent</option>
                  </select>
                </span>
                <br />

                <label>Category:</label>
                <span className="select is-small">
                  <select
                    id="priority"
                    onChange={this.CategoryOnChange}
                    defaultValue={this.props.obj.category}
                  >
                    {this.props.allowedCat.map(elem => (
                      <option className="selection">{elem}</option>
                    ))}
                  </select>
                </span>
                <br />
                <label>Deadline:</label>
                <input
                  type="date"
                  className="is-small"
                  defaultValue={this.props.obj.deadline}
                  onChange={this.deadlineOnChange}
                />
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.submitUpdate}>
              Submit
            </button>
            <button className="button" onClick={this.cancelUpdate}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
