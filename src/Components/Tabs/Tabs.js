import React, { Component, Fragment } from "react";
import Tab from "./Tab/Tab";
import AddTab from "./AddTab/AddTab";

class Tabs extends Component {
  state = {
    categoriesArray: [
      {
        id: "cat0",
        name: "All",
        active: true,
        deleted: false
      },
      // {
      //   id: "cat1",
      //   name: "market",
      //   active: false,
      //   deleted: false
      // },
      // {
      //   id: "cat2",
      //   name: "school",
      //   active: false,
      //   deleted: false
      // }
    ],
    AddCategory: {
      class: "modal",
      name: "New Category"
    }
  };

  AlertAdd = () => {
    let stateUpdate = this.state.AddCategory;
    stateUpdate.class = "modal is-active";
    this.setState({ AddCategory: stateUpdate });
  };

  cancelAdd = () => {
    let stateUpdate = this.state.AddCategory;
    stateUpdate.class = "modal";
    this.setState({ AddCategory: stateUpdate });
  };

  activate = id => {
    let stateUpdate = this.state.categoriesArray;
    stateUpdate.forEach(elem => {
      if (elem.id === id) {
        elem.active = true;
        this.props.update(elem.name);
      } else elem.active = false;
    });
    this.setState({ categoriesArray: stateUpdate });
  };

  submitAdd = Category => {
    let stateUpdate = this.state.categoriesArray;
    let newCat = {
      id: `cat${stateUpdate.length}`,
      name: Category,
      active: false,
      deleted: false
    };
    stateUpdate.push(newCat);
    this.setState({ categoriesArray: stateUpdate });
    let array = []
    this.state.categoriesArray.forEach(elem => {
      if(elem.deleted===false && elem.name!=="All"){
        array.push(elem.name)
      }
    })
    this.props.allowedCat(array)
    this.cancelAdd();
    this.activate(newCat.id)
  };

  removeTab = id => {
    let stateUpdate = this.state.categoriesArray;
    stateUpdate.forEach(elem => {
      if (elem.id === id) {
        elem.deleted = true;
      }
    });
    this.setState({ categoriesArray: stateUpdate });
    let array = []
    this.state.categoriesArray.forEach(elem => {
      if(elem.deleted===false && elem.name!=="All"){
        array.push(elem.name)
      }
    })
    this.props.allowedCat(array)
  };

  render() {
    return (
      <p className="panel-tabs">
        <AddTab
          parameters={this.state.AddCategory}
          cancelAdd={this.cancelAdd}
          submitAdd={this.submitAdd}
        />
        {this.state.categoriesArray.map(elem =>
          elem.deleted ? (
            <Fragment key={elem.id}></Fragment>
          ) : (
            <Tab
              key={elem.id}
              obj={elem}
              update={this.update}
              activate={this.activate}
              active={elem.active ? "is-active" : ""}
              removeTab={this.removeTab}
            />
          )
        )}
        <a onClick={this.AlertAdd}>
          <em>+ Add Category</em>
        </a>
      </p>
    );
  }
}

export default Tabs;
