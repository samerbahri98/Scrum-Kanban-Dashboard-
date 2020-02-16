import React, { Component } from "react";

export default class AddTab extends Component {
  state = {
    text: ""
  };
  cancelAdd = event => {
    this.props.cancelAdd();
  };

  onChange = event => this.setState({text : event.target.value})

  submitAdd = () => {
    this.props.submitAdd(this.state.text)
  }

  render() {
    return (
      <div className={this.props.parameters.class}>
        <div className="modal-background" onClick={this.cancelAdd}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Category</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.cancelAdd}
            ></button>
          </header>
          <section className="modal-card-body">
            Category name:
            <input
              className="input"
              type="text"
              placeholder="Category name"
              value={this.state.text}
              onChange={this.onChange}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.submitAdd}>Save changes</button>
            <button className="button" onClick={this.cancelAdd}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
