import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count: 0,
    };
    render() { 
        const classes ="badge m-2 badge-"
        classes += (this.state.count===0) ? "warning" : "primary";

        return (<React.Fragment>
                    <span className={classes}>{this.formatCount()}</span> 
                    <button className="btn btn-secondary btn-sm">Increment</button>
                </React.Fragment>);
    }/*Badge is making the blue background and m-2 makes a margin. 
    Look into bootstrap documentation for more class names*/

    formatCount () {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    };
}
 
export default Counter;