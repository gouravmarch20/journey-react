import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/menuToggleSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menu.isMenuOpen);

  return (
    <div>
     { console.log(menu)}
        <h1 onClick={()=>{
          dispatch(toggleMenu())
        }} className='bg-red-500 p-5'>hello see clg redux actived</h1>
    </div>
  )
}

export default Header