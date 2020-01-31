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
    const data = { content: "" };
    const char_length = 0;
    this.setState({ data, char_length });
  };

  render() {
    return (
      <div className="InputForm">
        <form onSubmit={this.handleSubmit}>
          {this.renderTextArea("content", "Note", 4, 38)}
          <div className="InputForm__btnDiv">
            {this.renderButton("Add Note", "btn--addNote")}
          </div>
        </form>
      </div>
    );
  }
}

export default InputForm;
