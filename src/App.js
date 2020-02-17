import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Tabs from "./Components/Tabs/Tabs";
import Tasklist from "./Components/Tasklist/Tasklist";
import "./App.css";

class App extends Component {
  state = {
    currentCat: "All",
    allowedCat: [],
    lists: ["Backlog", "In progress", "Testing", "Ready", "Release"],
    insert : null  };

  update = cat => {
    this.setState({ currentCat: cat });
  };


  allowedCat = array => this.setState({ allowedCat: array });
  updateList = (obj) => {
    if(obj.isDrag&&obj.isDrop){
      let currentState = {
        src : obj.draggedItem,
        distlist : obj.droppedList,
        distobj : (obj.list===false)?null:obj.droppedItem
      }
      this.setState=({insert:currentState})

    }
  }

  rmupdate = () => {this.setState({insert:null})}

  render() {
    return (
      <div className="App">
        <Header />
        <Tabs update={this.update} allowedCat={this.allowedCat} />
        <div className="container is-fluid columns">
          {this.state.lists.map(elem => (
            <div className="notification is-fluid column">
              <Tasklist
                currentCat={this.state.currentCat}
                title={elem}
                allowedCat={this.state.allowedCat}
                update={this.updateList}
                insert= {this.state.insert}
                rminsert = {this.rminsert}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
