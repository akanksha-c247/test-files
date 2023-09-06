import React from 'react';
import './inputfields.scss'; 

const InputField = ({ type, placeholder, label, value, onChange,name,error }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        name={name}  
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default InputField;
