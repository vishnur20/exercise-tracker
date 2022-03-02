import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>ExcerTracker</Link>
                <div className='navbar navbar-collapse'>
                    <ul className='navbar mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link link-secondary'>Exercises</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link link-secondary'>Create Exercise</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link link-secondary'>Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;