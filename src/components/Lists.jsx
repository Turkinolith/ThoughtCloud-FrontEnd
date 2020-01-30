import React, { Component } from "react";
import { getLists, deleteList } from "../services/fakeListService";
import InputForm from "./InputForm";
import Image from "../img/logo-green-small-1x.png";

class Lists extends Component {
  state = {
    lists: [
      {
        _id: "0000",
        content: "This is my first list entry.",
        isComplete: false
      },
      {
        _id: "0001",
        content: "This is my second list entry.",
        isComplete: true
      },
      {
        _id: "0002",
        content: "This is my third list entry.",
        isComplete: false
      }
    ]
  };

  /*   componentDidMount() {
    this.setState({ lists: getLists() });
  } */

  handleDelete = noteID => {
    const lists = this.state.lists.filter(li => li._id !== noteID);
    this.setState({ lists });
    deleteList(noteID);
  };

  handleAdd = addEntry => {
    const locallist = this.state.lists;
    console.log("local: ", locallist);
    console.log("entry: ", addEntry);
    locallist.push(addEntry);
    this.setState({ lists: locallist });
  };

  render() {
    const { length: count } = this.state.lists;

    return (
      <React.Fragment>
        <header className="header">
          <div className="header__logo-box">
            <img src={Image} alt="small green logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Doit!</span>
              <span className="heading-primary--main">
                So you don't forget.
              </span>
            </h1>
          </div>
        </header>
        <div className="Display">
          {count === 0 ? (
            <p className="Display__empty">
              There are no lists in the database.
            </p>
          ) : (
            <p className="Display__counter">
              Showing {count} lists in the database.
            </p>
          )}
        </div>
        <InputForm onAdd={this.handleAdd} />
        <table className="ListTable">
          <thead className="ListTable__head">
            <tr className="ListTable__titleRow">
              <th>Content</th>
              <th>Complete</th>
              <th />
            </tr>
          </thead>
          <tbody className="ListTable__body">
            {this.state.lists.map(list => (
              <tr key={list._id}>
                <td>{list.content}</td>
                <td>
                  {" "}
                  <input
                    type="checkbox"
                    name={list._id}
                    id={list._id}
                    value={list.isComplete}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(list._id)}
                    className="btn btn--white btn--animated"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Lists;
