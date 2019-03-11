import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  render() {

    function time(){
      const changeTime = changeTime();
      
    function changeTime() {
      return <div>
                <h2>il est {this.state.date.toLocaleTimeString()}</h2>
              </div>;
      }
     changeTime();
      setTimeout(1000);
    }
    return (
      <div>
        <time />
      </div>
    );
  }
 
}

export default Header;
