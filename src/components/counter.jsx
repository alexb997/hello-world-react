import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count: 0
    };
    render() { 
        return (<React.Fragment>
                    <span>{this.state.count}</span>
                    <button>Increment</button>
                </React.Fragment>);
    }
}
 
export default Counter;