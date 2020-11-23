import React from "react"
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      button_text: "Hide Image",
      is_image_hidden: false
    }
  }
  
  toggle_image(){
    const {state} = this;
    state.is_image_hidden  = !state.is_image_hidden;
    if(!state.is_image_hidden){
      state.button_text = "Hide Image";
    }else {
      state.button_text = "Display Image"
    }

    this.setState({
      ...state
    })
  }
  render(){
    const {button_text , is_image_hidden} = this.state
    return (
      <div className="App">
        <header className="App-header">
          {!is_image_hidden && (<img src={logo} className="App-logo" alt="logo" />)}
          
          <p>
            Click Button To Toggle The Image
          </p>
          <button onClick={() => this.toggle_image()}>
            {button_text}
          </button>
        </header>
      </div>
    );
  }
  
}

export default App;
