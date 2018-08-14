import React, { Component } from 'react';

import Proptypes from 'prop-types';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : props.initialAge,
            homeLink : props.initialValue
        }
        setTimeout(()=>{
            this.setState({
                status : 1
            })
        })
    }

    onMakeOlder() {
        this.setState({
            age : this.state.age + 3
        })     
    }

    handleGreet() {
        this.props.greet(this.state.age);
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink : event.target.value
        })
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Comnonent did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Component should update", nextProps, nextState);
        if (nextState.status === 1) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }


  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home !!</h1>
            <div>your name is {this.props.name}, your age is {this.state.age}</div>
            <div>
                <h4>hobbies</h4>
                <ul>
                    {this.props.hobbies.map((hobby, i)=><li key={i}>{hobby}</li>)}
                </ul>
                <div>{this.props.children}</div>
                <button onClick={this.onMakeOlder.bind(this)}  className="btn btn-primary">Make me older</button>
                <hr/>
                <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">greet</button>
                <hr/>
                <input defaultValue={this.props.initialValue} type="text" onChange={(event)=>this.onHandleChange(event)} />
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">changeLink</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
    name : Proptypes.string,
    age : Proptypes.number,
    children : Proptypes.element.isRequired,
    greet : Proptypes.func,
    initialValue : Proptypes.string
}
