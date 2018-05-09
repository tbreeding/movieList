import React, {Component} from "react";

class AddOption extends Component {
  constructor(props) {
      super(props)
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          error: undefined
      }
  }
  handleSubmit(e) {
      e.preventDefault();
      const error = this.props.handleAddOption(e.target.elements.newOption.value.trim());

      this.setState(() => ({ error }))

      if (!error) e.target.elements.newOption.value = "";
  }
  render() {
      return (
          <div>
              {this.state.error && <p className="addOptionError">{this.state.error}</p>}
              <form 
                className="addOption"
                onSubmit={this.handleSubmit}>
                  <input
                    className="addOption__input"
                    type="text" 
                    name="newOption" 
                    placeholder="Add Option Here"
                  />
                  <button 
                    className="button"
                    type="submit"
                  >
                      Add Option
                  </button>
              </form>
          </div>
      )
  }
}

export default AddOption;