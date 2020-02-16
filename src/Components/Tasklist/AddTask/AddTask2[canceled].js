import React, { Component } from "react";

export default class AddTask2 extends Component {
  render() {
    return (
      <div className="panel-block is-primary">
        <p className="control has-icon">
          <label>Add Task</label>
          <textarea
            className="textarea is-small"
            name="taskContent"
            id="taskContent"
            placeholder="Task..."
          ></textarea>
          <input
            className="input is-small"
            type="text"
            placeholder="Responsible"
            id="responsible"
          />
          <label>Priority:</label>
          <span className="select is-small">
            <select id="priority">
              <option className="selection">Low</option>
              <option className="selection">Medium</option>
              <option className="selection">High</option>
              <option className="selection">Urgent</option>
            </select>
          </span>
          <br />

          <label>Category:</label>
          <span className="select is-small">
            <select id="priority">
              <option className="selection">School</option>
              <option className="selection">Market</option>
            </select>
          </span>
          <br />
          <label>Deadline:</label>
          <input type="date" className="is-small" />

          <button
            className="button is-primary is-outlined is-fullwidth"
            id="addTask"
          >
            Add Task
          </button>
        </p>
      </div>
    );
  }
}
