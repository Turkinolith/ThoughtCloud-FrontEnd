import React, { Component } from "react";
import { getLists, deleteList } from "../services/fakeListService";
import InputForm from "./InputForm";
import Image from "../img/LB_logo_solid_path_50_50.png";

class Lists extends Component {
  state = {
    lists: [
      {
        _id: "0000",
        content: "This is my first list entry.",
        isComplete: false
      }
    ]
  };

  /*   componentDidMount() {
    this.setState({ lists: getLists() });
  } */

  handleCheck = noteID => {
    const lists = this.state.lists;
    const index = lists.findIndex(item => item._id === noteID);
    const value = lists[index].isComplete;
    lists[index].isComplete = value === false ? true : false;
    this.setState({ lists });
  };

  handleDelete = noteID => {
    const lists = this.state.lists.filter(li => li._id !== noteID);
    this.setState({ lists });
    deleteList(noteID);
  };

  handleAdd = addEntry => {
    this.setState({ lists: [...this.state.lists, addEntry] });
  };

  getTextClasses = isComplete => {
    let classes = "ListTable__row__td ListTable__row__td--content ";
    classes +=
      isComplete === true ? "ListTable__row__td--content--complete" : "";
    return classes;
  };

  render() {
    const { length: count } = this.state.lists;

    return (
      <React.Fragment>
        <div className="header__logo-box">
          <img src={Image} alt="LB Logo" className="header__logo--image" />
        </div>
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Thought Cloud</span>
              <span className="heading-primary--sub">for fluffy thoughts</span>
            </h1>
          </div>
        </header>
        <div className="display">
          {count === 0 ? (
            <p className="display__empty">
              There are no lists in the database.
            </p>
          ) : null}
        </div>
        <InputForm onAdd={this.handleAdd} />
        <div className="ListTable">
          <table className="ListTable__table">
            <tbody className="ListTable__body">
              {this.state.lists.map(list => (
                <tr className="ListTable__row" key={list._id}>
                  <td
                    className={this.getTextClasses(list.isComplete)}
                    onClick={() => this.handleCheck(list._id)}
                  >
                    {list.content}
                  </td>
                  <td className="ListTable__row__td ListTable__row__td--delete">
                    <button
                      onClick={() => this.handleDelete(list._id)}
                      className="btn btn--blue"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Lists;
