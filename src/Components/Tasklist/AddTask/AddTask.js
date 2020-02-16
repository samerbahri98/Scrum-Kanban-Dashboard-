import React, { Component } from "react";

export default class AddTask extends Component {
  state={
    task: {
    name: "",
    owner: "",
    priority: "",
    category: "",
    submitDate: new Date(),
    deadline: new Date(),
    done: false
    }
  }

  cancelAdd = () => this.props.cancelAdd()
  submitAdd = () => {
    let currentState = this.state.task
    currentState.submitDate = new Date ()
    currentState.done = false
    currentState.priority= currentState.priority || 'Low'
    currentState.category= currentState.category || this.props.currentCat
    this.setState({task : currentState})
    this.props.submitAdd(this.state.task)
    this.cancelAdd()
  }

  taskOnChange = event => {
    let currentState = this.state.task
    currentState.name = event.target.value
    this.setState({task : currentState})
  }

  respOnChange = event => {
    let currentState = this.state.task
    currentState.owner = event.target.value
    this.setState({task : currentState})
  }

  priorityOnChange = event => {
    let currentState = this.state.task
    currentState.priority = event.target.value
    this.setState({task : currentState})
  }

  CategoryOnChange = event => {
    let currentState = this.state.task
    currentState.category = event.target.value
    this.setState({task : currentState})
  }

  deadlineOnChange = event => {
    let currentState = this.state.task
    currentState.deadline = new Date(event.target.value)
    this.setState({task : currentState})
  }



  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.cancelAdd}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Task</p>
            <button className="delete" aria-label="close" onClick={this.cancelAdd}></button>
          </header>
          <section className="modal-card-body">
            <div className="panel-block is-primary">
              <p className="control has-icon">
                <textarea
                  className="textarea is-small"
                  style={{resize : "none"}}
                  name="taskContent"
                  id="taskContent"
                  placeholder="Task..."
                  onChange={this.taskOnChange}
                ></textarea>
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Responsible"
                  id="responsible"
                  onChange={this.respOnChange}
                />
                <label>Priority:</label>
                <span className="select is-small">
                  <select id="priority" onChange={this.priorityOnChange}>
                    <option className="selection">Low</option>
                    <option className="selection">Medium</option>
                    <option className="selection">High</option>
                    <option className="selection">Urgent</option>
                  </select>
                </span>
                <br />

                <label>Category: </label>

                {this.props.allowedCat.length===0
                  ?(<a className="target is-small" onClick={this.cancelAdd}>Please add a Category first</a>)
                  :(
                <span className="select is-small">
                  <select id="priority" onChange={this.CategoryOnChange} >
                    {this.props.allowedCat.map((elem, index)=> (
                      <option className="selection" selected={this.props.currentCat===elem} key={index}>{elem}</option>
                    ))}
                  </select>
                </span>
                )}
                <br />
                <label>Deadline:</label>
                <input type="date" className="is-small" onChange={this.deadlineOnChange}/>
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.submitAdd}>Submit</button>
            <button className="button" onClick={this.cancelAdd}>Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}
