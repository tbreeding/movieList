import React, {Component} from "react";

const Action = (props) => {
  return (
      <div>
          <button className="bigButton"
              onClick={props.handlePick}
              disabled={!props.hasOptions}
          >
          What Should I Do?
          </button>
      </div>
  )
}

export default Action;