import { useState } from 'react';
import logo from  '../assets/logo1.png'
import {FaBars , FaTimes , FaGithub,FaTwitter} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleClick=()=> {setNav(!nav);
    };
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-100'>
    <div><img src={logo} alt='logo' style={{width:'50px'}}>
    </img></div>

    {/* MENU */}
    <div>
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
    {/* Hamburger menu */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/> : <FaTimes/>}   
    </div>
    {/* Mobile Menu*/}
    <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </div>
   
    {/* Mobile Menu*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300 '> 
                twitter <FaTwitter size={30}></FaTwitter>
            </a>
            </li>
            <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300 '>
                github <FaGithub size={30}></FaGithub>
            </a>
            </li>
            <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300 '>
                email <HiOutlineMail size={30}></HiOutlineMail>
            </a>
            </li>
            <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300 '>
                resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </a>
            </li>
        </ul>
    </div>
    </div>
  )

}

export default Navbar