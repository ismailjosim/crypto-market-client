import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/favicon.png'

const Header = () => {
    const classes = "hover:btn-secondary rounded-none font-semibold uppercase hover:text-white active:bg-primary active:text-white p-4"
    return (
        <div className='bg-slate-200'>
            <header className='w-11/12 mx-auto flex items-center justify-between '>
                <Link className='flex items-center gap-1' to={ '/' }>
                    <img width={ 40 } src={ Logo } alt="Coin Market" />
                    <span className='text-4xl font-bold uppercase'>Coin</span>
                </Link>
                <nav className='flex items-center'>
                    <NavLink className={ classes } to={ '/' }>Home</NavLink>
                    <NavLink className={ classes } to={ '/' }>Crypto</NavLink>
                    <NavLink className={ classes } to={ '/' }>About Us</NavLink>
                    <NavLink className={ classes } to={ '/' }>Our Team</NavLink>
                    <NavLink className={ classes } to={ '/' }>Contact Us</NavLink>
                    <NavLink className={ classes } to={ '/' }>Online Shop</NavLink>
                    <NavLink className={ classes } to={ '/' }>Blog</NavLink>
                </nav>
            </header>
        </div>
    );
};

export default Header;
