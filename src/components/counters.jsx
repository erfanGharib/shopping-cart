import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() {
        // use object destructering to have cleaner code
        const {onIncrement, onReset, onDelete, counters} = this.props;
        // load reset button 
        // load counter by state.counters arr length
        return (
            <div className='flex flex-col m-5'>
                <button
                    onClick={onReset}
                    className='px-2 py-1 bg-teal-500 text-white rounded-md w-16 mb-5 hover:bg-teal-700'
                >
                    Reset
                </button>
                {counters.map(
                    counter=>
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    >
                        <h1 className='text-black inline font-bold text-2xl'>{counter.id}.</h1>
                    </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters;