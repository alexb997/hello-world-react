import React, { Component } from 'react'

class Counter extends React.Component {
    state = {
        count: 0,
        tags: []
    };

    renderTags() {
        if (this.state.tags.length===0)
            return <p>There are no tags!</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)} </ul>;
    }

    render() { 
        //let classes = this.getBadgeClasses();

        return (<React.Fragment>
                  {this.state.tags.length === 0 && "Please create a new tag!"}
                  {this.renderTags()} 
                </React.Fragment>);
    }
}
 
export default Counter;