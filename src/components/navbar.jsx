import React from 'react';
// props used as default arg in state functional component
const NavBar =props=> {
    return (
        <nav className='w-full flex items-center px-3 h-16 border-l-8 border-zinc-300 bg-zinc-200 text-zinc-500'>
            <h2 className='font-bold text-xl'>
                Total Product Number :  
                <span className='ml-3'>
                    {props.totalCounters}
                </span>
            </h2>
        </nav>
    );
}
 
export default NavBar;