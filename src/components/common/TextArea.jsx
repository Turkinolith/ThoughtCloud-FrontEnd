import React from "react";

const TextArea = ({ name, label, error, char_length, char_max, ...rest }) => {
  return (
    <div className="form-group">
      <div className="form-group__label">
        <label htmlFor={name}>{label}</label>
      </div>
      <textarea {...rest} name={name} id={name} className="form-control" />
      {char_length && (
        <div className="form-control__chars">
          {char_max - char_length} characters left
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
