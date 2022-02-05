import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }

    handleIncreament =counter=> {
        const counters_ = [...this.state.counters];
        const index = counters_.indexOf(counter);
        counters_[index].value++;
        this.setState({counters_});
    }
    handleDelete =(counterId)=> {
        // delete a counter
        const countersFilter = this.state.counters.filter(c=>c.id !== counterId);
        this.setState({counters: countersFilter});
    }
    handleReset =()=> {
        // reset all counter and set them to zero
        const counters = this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counters})
    }
    render() {
        // load reset button 
        // load counter by state.counters arr length
        return (
            <div className='flex flex-col m-5'>
                <button
                    onClick={this.handleReset}
                    className='px-2 py-1 bg-teal-500 text-white rounded-md w-16 mb-5 hover:bg-teal-700'
                >
                    Reset
                </button>
                {this.state.counters.map(
                    counter=>
                    <Counter 
                        key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncreament}
                        counter={counter}
                    >
                        <h1 className='text-black inline font-bold mr-3 text-2xl'>{counter.id}.</h1>
                    </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters;