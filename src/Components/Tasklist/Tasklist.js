import React, { Component, Fragment } from "react";
import Task from "./Task/Task";
import Edits from "./Edits/Edits";
import AddTask from "./AddTask/AddTask.js";

export default class Tasklist extends Component {
  state = {
    tasksArray: [
      // {
      //   id: "ta1",
      //   name: "Calculus homework",
      //   owner: "samer",
      //   priority: "Urgent",
      //   category: "school",
      //   deadline: new Date("May 09, 2020"),
      //   done: false
      // },
      // {
      //   id: "ta2",
      //   name: "buy chicken",
      //   owner: "samer",
      //   priority: "Low",
      //   category: "market",
      //   deadline: new Date("May 10, 2020"),
      //   done: false
      // },
      // {
      //   id: "ta3",
      //   name: "E100",
      //   owner: "samer",
      //   priority: "Medium",
      //   category: "school",
      //   deadline: new Date("May 10, 2020"),
      //   done: false
      // }
    ],
    AddTask: false,
    dragev: {
      draggedItem: {},
      droppedList: "",
      droppedItem: {},
      isDrag: false,
      isDrop: false,
      list: null
    }
  };

  delete = id => {
    let stateUpdate = this.state.tasksArray;
    stateUpdate.forEach(elem => {
      if (elem.id === id && elem.done === false) {
        elem.done = true;
      }
    });
    this.setState({ tasksArray: stateUpdate });
  };

  deleteAll = () => {
    if (
      window.confirm(
        `do you want to delete all the tasks for ${this.props.currentCat} category?`
      )
    ) {
      let stateUpdate = this.state.tasksArray;
      stateUpdate.forEach(elem => {
        if (
          this.props.currentCat === elem.category ||
          this.props.currentCat === "All"
        ) {
          elem.done = true;
        }
      });
      this.setState({ tasksArray: stateUpdate });
    }
  };

  displayAdd = () => this.setState({ AddTask: true });
  cancelAdd = () => this.setState({ AddTask: false });
  submitAdd = task => {
    let currentState = this.state.tasksArray;
    task.id = `ta${currentState.length + 1}`;
    currentState.push(task);
    this.setState({ tasksArray: currentState });
  };

  submitUpdate = obj => {
    let currentState = this.state.tasksArray;
    currentState.forEach(elem => {
      if (elem.id === obj.id) {
        elem = obj;
      }
    });
    this.setState({ tasksArray: currentState });
  };

  drag = obj => {
    let currentState = this.state.dragev;
    currentState.draggedItem = obj;
    this.setState({ dragev: currentState });
  };
  drop = obj => {
    let currentState = this.state.dragev;
    currentState.droppedItem = obj;
    currentState.droppedList= this.props.title
    currentState.isDrop = true;
    currentState.list = false;
    this.setState({ dragev: currentState });
  };
  dropList = () => {
    let currentState = this.state.dragev;
    if (currentState.list === null) {
      currentState.list = true;
    }
    currentState.dropList = this.props.title;
    currentState.isDrop = true;
    this.setState({ dragev: currentState });
    this.props.update(this.state.dragev);
    currentState = {
      draggedItem: {},
      droppedList: "",
      droppedItem: {},
      isDrag: false,
      isDrop: false,
      list: null
    };
    this.setState({ dragev: currentState });
  };
  dragend = obj => {
    let currentState = this.state.dragev;
    currentState.droppedItem = obj;
    if (currentState.isDrop === false) {
      currentState.isDrag = false;
    }
    this.setState({ dragev: currentState });
  };

  render() {
    const insert = this.props.insert
    if(insert !== null){
      if (insert.distlist === this.props.title){
        if(this.state.tasksArray = [])
        {
          this.setState({tasksArray:insert.src})
        }
      }
      this.props.rmupdate()
    }
    // let currentState = this.state.tasksArray;

    // currentState.forEach(elem => {
    //   let Breac;
    //   let check;
    //   try {
    //     this.props.allowedCat.forEach(cat => {
    //       check = elem.category === cat;
    //       if (check) throw Breac;
    //     });
    //   } catch (e) {
    //     if (e !== Breac) throw e;
    //   }
    //   elem.done = check;

    // });
    // this.setState({ tasksArray: currentState });
    return (
      <div className="tasksList" onDrop={this.dropList}>
        <p className="title">{this.props.title}</p>
        {this.state.tasksArray.map(elem =>
          (this.props.currentCat === "All" ||
            this.props.currentCat === elem.category) &&
          elem.done === false ? (
            <Task
              key={elem.id}
              obj={elem}
              delete={this.delete}
              allowedCat={this.props.allowedCat}
              submitUpdate={this.submitUpdate}
              drag={this.drag}
              dragend={this.dragend}
              drop={this.drop}
            />
          ) : (
            <Fragment key={elem.id}></Fragment>
          )
        )}
        {this.state.AddTask ? (
          <AddTask
            cancelAdd={this.cancelAdd}
            submitAdd={this.submitAdd}
            allowedCat={this.props.allowedCat}
            currentCat={this.props.currentCat}
          />
        ) : (
          <Fragment />
        )}
        <Edits deleteAll={this.deleteAll} displayAdd={this.displayAdd} />
      </div>
    );
  }
}
