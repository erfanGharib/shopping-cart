import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncreament()}
                    className='py-0.5 px-2 bg-gray-500 text-white rounded-sm hover:bg-gray-700'
                >
                    Increment
                </button>
            </React.Fragment>
        )
    }

    handleIncreament =()=> {
        this.setState({ count: this.state.count+1 })
    }
    getBadgeClasses() {
        let classes = 'p-1 font-bold rounded-sm text-stone-900 bg-';
        classes += this.state.count===0 ? 'yellow-500' : 'blue-500 text-white';
        return classes;
    }
    formatCount() {
        // object destructuring use for putting object properties
        // in variable ↓
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;