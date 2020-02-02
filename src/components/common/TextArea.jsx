import React from "react";

const TextArea = ({
  name,
  label,
  error,
  char_length,
  char_max,
  placeholder,
  ...rest
}) => {
  return (
    <div className="InputForm__form-group">
      <div className="InputForm__form-group--label">
        <label htmlFor={name}>{label}</label>
      </div>
      <textarea
        {...rest}
        name={name}
        id={name}
        className="InputForm__form-group--textarea"
        placeholder={placeholder}
      />
      {
        <div className="InputForm__form-group--chars">
          {char_length ? char_max - char_length : 128} characters left
        </div>
      }
      {error && <div className="InputForm__form-group--error">{error}</div>}
    </div>
  );
};

export default TextArea;
