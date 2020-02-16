import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Tasklist from "./Components/Tasklist/Tasklist";
import './App.css'

class App extends Component {
  state = {
    currentCat: "All",
    allowedCat:[]
  };

  update = cat => {
    this.setState({ currentCat: cat });
  };

  allowedCat= array => this.setState({allowedCat:array})

  render() {
    return (
      <div className="App">
        <Header />
        <Tabs update={this.update} allowedCat= {this.allowedCat}/>
        <div className="container is-fluid columns">
          <div className="notification is-fluid column">
            <Tasklist currentCat={this.state.currentCat} title="Backlog" allowedCat= {this.state.allowedCat}/>
          </div>
          <div className="notification is-fluid column">
            <Tasklist currentCat={this.state.currentCat} title="In progress" allowedCat= {this.state.allowedCat}/>
          </div>
          <div className="notification is-fluid column">
            <Tasklist currentCat={this.state.currentCat} title="Testing" allowedCat= {this.state.allowedCat}/>
          </div>
          <div className="notification is-fluid column">
            <Tasklist currentCat={this.state.currentCat} title="Ready" allowedCat= {this.state.allowedCat}/>
          </div>
          <div className="notification is-fluid column">
            <Tasklist currentCat={this.state.currentCat} title="Release" allowedCat= {this.state.allowedCat}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
