import React, {Component} from "react";
import Option from "./Option";


const Options = (props) => {
  const options = props.options.map((option, ind) => (
      <Option 
          key={ind} 
          option={option} 
          index={ind} 
          count={ind +1}
          handleRemoveItem={props.handleRemoveItem}
      />
  ))
  return (
      <div>
        <div className="widgetHeader">
        <h3 className="widgetHeader__title">Your Options</h3>
          <button 
            className="button button--link"
              onClick={props.handleRemoveAll}
          >
              Remove All
          </button>
        </div>
          {options}
          {props.options.length === 0 && <p className="widgetHeader__message">Please add an option to get started.</p>}
      </div>
  )
}

export default Options;