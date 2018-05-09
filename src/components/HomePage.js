import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Nav from './Nav';

class HomePage extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
      <div className="homePage">
        <p>Hello World!</p>
      </div>
    )
  }
}


export default HomePage;