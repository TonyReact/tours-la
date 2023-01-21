import React, { useState } from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'
import Burger from './Burger';

const Navbar = () => {

  const[open, setOpen] = useState(false);

  const burgerOn = <CgMenuRightAlt className='burger' size='40' color='white' onClick={() => setOpen(!open)} />
  const burgerOff = <CgCloseR className='burger' size='40' color='white' onClick={() => setOpen(!open)} />

  return (
    <div className='burger-menu'>
      
      {open ? burgerOff : burgerOn}
      {open && <Burger />}
    </div>
  )
}

export default Navbar;