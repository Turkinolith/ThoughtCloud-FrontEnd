import React from "react";
import Joi from "@hapi/joi";
import Form from "./common/Form";
import { saveList } from "./../services/fakeListService";

class InputForm extends Form {
  state = {
    data: { content: "" },
    errors: {}
  };

  schema = {
    content: Joi.string()
      .max(128)
      .label("Note")
  };

  doSubmit = () => {
    const submitted = saveList(this.state.data);
    this.props.onAdd(submitted);
  };

  render() {
    return (
      <div className="InputForm">
        <h3 className="InputForm__heading">Add Note</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderTextArea("content", "Note", 4, 40)}
          {this.renderButton("+")}
        </form>
      </div>
    );
  }
}

export default InputForm;