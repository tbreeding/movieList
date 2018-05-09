import React, {Component} from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends Component {
  constructor(props) {
      super(props)
      this.state = {
          subtitle:"Put your life in the hands of a computer.",
          options: [],
          selectedOption: undefined
      }
      this.handleRemoveItem = this.handleRemoveItem.bind(this);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.closeSelectedOption = this.closeSelectedOption.bind(this);
  }
  componentDidMount = () => {
      try {
          const json = localStorage.getItem("options");
          const options = JSON.parse(json);
          if(options) this.setState(() => ({options}))
      } catch (e) {
          //Do Nothing
      }  
  }
  componentDidUpdate = (prevProps, prevState) => {
      if(prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem("options", json);
      }
  }
  compenentWillUnmount = () => {
      console.log("Will Unmount!")
  }
  handlePick = () => {
      const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
      this.setState(() => ({
          selectedOption: option
        }));
  }
  handleRemoveItem = (ind) => {
      this.setState((prevState) => (
          { options: prevState.options.filter((val, index) => index != ind)}
      ))
  }
  handleRemoveAll = () => {
      this.setState(() => ({ options: [] } ))
  }
  handleAddOption = (newOption) => {
      if(!newOption) {
          return "Enter Valid Value";
      } else if(this.state.options.includes(newOption)) {
          return "This option already exists";
      } 
      this.setState((prevState) => (
          { options: [...prevState.options, newOption] }
      ))           
  }
  closeSelectedOption = () => {
      this.setState(() => ({
          selectedOption: undefined
      }))
  }
  render() {
      return (
          <div>
              <Header 
                  subtitle={this.state.subtitle}
              />
              <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <div className="widget">
                    <Options 
                        options={this.state.options} 
                        handleRemoveAll={this.handleRemoveAll} 
                        handleRemoveItem={this.handleRemoveItem}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
            </div>
              <OptionModal 
                selectedOption={this.state.selectedOption}
                closeSelectedOption={this.closeSelectedOption}
              />
          </div>
      )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;