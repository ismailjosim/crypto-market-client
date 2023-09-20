import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/favicon.png'
import '../styles/index.css'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const classes =
        'rounded-none font-semibold uppercase hover:bg-transparent hover:border-primary  border-b-2 p-4 transition-all duration-300 ease-in-out outline-none'

    const menuItems = (
        <>
            <li>
                <NavLink className={ classes } to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/crypto' }>
                    Crypto
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/about' }>
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/team' }>
                    Our Team
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/contact' }>
                    Contact Us
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/shop' }>
                    Online Shop
                </NavLink>
            </li>
            <li>
                <NavLink className={ classes } to={ '/blog' }>
                    Blog
                </NavLink>
            </li>
        </>
    )

    return (
        <div className='bg-slate-200'>
            <header className='w-11/12 mx-auto flex items-center justify-between '>
                <Link className='flex items-center gap-1' to={ '/' }>
                    <img width={ 40 } src={ Logo } alt='Coin Market' />
                    <span className='text-4xl font-bold uppercase'>Coin</span>
                </Link>
                <div>
                    <nav className='hidden lg:flex menu menu-horizontal py-0'>
                        { menuItems }
                    </nav>
                    <button
                        onClick={ () => setIsActive(!isActive) }
                        className='flex lg:hidden items-center text-2xl py-4 transition-all duration-500 ease-in-out '
                    >
                        { isActive ? <IoClose /> : <FiMenu /> }
                    </button>
                </div>
            </header>

            { isActive ? (
                <nav className='menu menu-vertical items-center py-0'>{ menuItems }</nav>
            ) : null }
        </div>
    )
}

export default Header
