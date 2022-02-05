import React, {Component} from 'react';
class NavBar extends Component {
    render() { 
        return (
            <nav className='w-full flex items-center px-3 h-16 border-l-8 border-zinc-300 bg-zinc-200 text-zinc-500'>
                <h2 className='font-bold text-xl'>
                    NavBar
                </h2>
            </nav>
        );
    }
}
 
export default NavBar;