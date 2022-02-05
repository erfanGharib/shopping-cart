import React, { Component } from 'react';
class Counter extends Component {
    render() {
        return (
            <div className='mb-4 flex items-center'>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='py-1 px-2 ml-3 bg-gray-500 text-white rounded-md hover:bg-gray-700'
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='bg-red-600 py-1 px-2 ml-3 text-white rounded-md hover:bg-red-700'
                >
                    Delete
                </button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = 'px-2 py-1 font-bold rounded-md bg-';
        classes += this.props.counter.value===0 ? 'yellow-400 text-stone-900' : 'blue-600 text-white';
        return classes;
    }
    formatCount() {
        // object destructuring use for putting object properties
        // in variable ↓
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;