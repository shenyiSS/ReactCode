import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeLink : "Home",
      homeMounted : true
    }
  }

  onGreet(age) {
    console.log("hello" + age);
  }

  onChangeLinkName(newName) {
    this.setState ({
      homeLink : newName
    })
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted : !this.state.homeMounted
    })
  }
  
  

  render() {
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home name={"Shy"} 
                initialAge={12} 
                hobbies={["sports", "reading", "swimming"]} 
                greet={this.onGreet} 
                changeLink={this.onChangeLinkName.bind(this)}
                initialValue="initialValue">
            <p>I am Child</p>
          </Home>
      );
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>HELLO !!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
          <br/>
            <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
