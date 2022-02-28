import './App.css';
import './tailwind.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters_ = [...this.state.counters];
    const index = counters_.indexOf(counter);
    counters_[index].value++;
    this.setState({ counters_ });
  }
  handleDelete = (counterId) => {
    // delete a counter
    const countersFilter = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: countersFilter });
  }
  handleReset = () => {
    // reset all counter and set them to zero
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  }
  
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length} />
        <main className='w-full flex'>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
