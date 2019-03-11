import React, { Component } from 'react';
import './New.css';

class New extends Component {
  render() {
    function FormatName(props){
      return <h3>Hello, {props.name}!</h3>;
    }
    
    function Lala(){
      return (
        <div>
          <FormatName name="John" />
          <FormatName name="Jean" />
          <FormatName name="James" />
        </div>
      );
    }
    return (
      <div>
        <Lala />
      </div>
    );
  }
}

export default New;
