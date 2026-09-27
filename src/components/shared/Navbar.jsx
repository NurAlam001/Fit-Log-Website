'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import Logo from '@/assets/logo.png'
import Link from 'next/link';
import { PlansContext } from '@/context/planContext';

const Navbar = () => {
    const {addPlan,saveLater} = useContext(PlansContext);
    const links = <>
    <li><Link href='/'>Home</Link></li>
    <li><Link href="/workout" className="text-green-500 font-semibold">
                  Workouts
                </Link></li>
    <li><Link href='/myplan'>My plan</Link></li>

    </>
    return (
        <div className='container mx-auto'>

            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                <Image src={Logo}
                alt='logo'
                width={28}
                height={28}/>
                <span className="font-bold text-lg">FITLOG</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="flex items-center gap-2">
                    <span>Plan</span>
              <span className="rounded-full bg-green-500 text-black w-6 h-6 flex items-center justify-center text-xs font-bold">
                {addPlan.length}
              </span>
              
            </div>
                <div className="flex items-center gap-2">
                    <span>Saved</span>
              <span className="rounded-full bg-gray-400 text-white w-6 h-6 flex items-center justify-center text-xs font-bold">
                {saveLater.length}
              </span>
              
            </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;