import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-1 shadow-lg'>
        <div className='flex col-span-1 mt-4 ml-4'>
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-6 cursor-pointer rounded-full hover:bg-gray-200"
            alt='menu' 
            src="https://cdn.icon-icons.com/icons2/2385/PNG/512/hamburger_menu_icon_144302.png"/>
            <a href="/">
            <img className="h-14 object-contain mt-[-16px] ml-4"
            alt='youtube-logo' 
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"/>
            </a>
        </div>
        <div className='col-span-10 px-14 flex justify-center items-center'>
            <input className="w-1/2 border border-gray-300 rounded-l-full p-2"type="text"/>
            <button className="border border-gray-300 rounded-r-full px-5 py-2  bg-gray-100">
            <img src="https://emojipedia.org/_next/static/media/search-dark.51fa5582.svg" alt="Search Icon" className="h-6 w-5"/>
            </button>
           
        </div>
        <div className='col-span-1'>
            <img className='h-12' alt='user' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL0xm6dUTEVbYn_suX7dMuhA05fIIb_pATA&usqp=CAU"/>
        </div>
    </div>
  )
}

export default Head