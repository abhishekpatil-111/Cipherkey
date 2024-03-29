import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white' >

            <div className="mycontainer flex justify-between items-center  py-5 px-4 h-14">
                <div className="logo font-bold text-2xl cursor-pointer">
                    <span className="text-green-700">&lt;</span>
                    <img className="inline-block h-8 w-8" src="/icons/key.png" alt="Key Icon" />
                    Cipher
                    <span className="text-green-700">key/</span>
                    <span className="text-green-700">&gt;</span>
                </div>


                <ul>
                    {/* <li className='flex gap-4'>
                    <a className='hover:font-bold' href='/'>Home</a>
                    <a className='hover:font-bold' href='#'>About</a>
                    <a className='hover:font-bold' href='#'>Contact</a>
                </li> */}

                </ul>
                <a title='Profile' href="#">

                    <button className='text-white flex'>
                        <img className='p-3 w-14' src="/icons/user.png" alt="github img" />
                    </button>
                    
                </a>

            </div>
        </nav>
    )
}

export default Navbar
