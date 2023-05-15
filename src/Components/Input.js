import React from 'react';

const Input = ({label,type,name,value,onChange,onFocus,condition}) => {

    return (
        <div>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
          />      
          {condition}  
        </div>
    );
};

export default Input;