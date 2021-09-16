import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count: 0,
    };

    render() { 
        return (<React.Fragment>
                    <span className="badge badge-primary m-2">{this.formatCount()}</span> 
                    <button>Increment</button>
                </React.Fragment>);
    }/*Badge is making the blue background and m-2 makes a margin */

    formatCount () {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
}
 
export default Counter;