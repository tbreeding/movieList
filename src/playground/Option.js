import React, {Component} from "react";

const Option = (props) => {
  const removeClick = (e) => {
      props.handleRemoveItem(e.target.id);
  }
  return (
      <div className="option">
          <p className="option__text">{props.count}. {props.option}</p>
          <button 
            className="button button--link"
            id={props.index} 
            onClick={removeClick} 
          >
            Remove
          </button>
      </div>
  )
}

export default Option;