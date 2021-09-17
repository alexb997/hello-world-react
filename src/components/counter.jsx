import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count: 0,
    };

    styles={
        fontSize: 10,// will be converted automatically to 10px
        fontWeight: "bold"
    };

    render() { 
        return (<React.Fragment>
                    <span style={ this.styles } className="badge badge-primary m-2">{this.formatCount()}</span> 
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