import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.count}</h1>
                <button>click me!</button>
            </React.Fragment>
        )
    }
}

export default Counter;