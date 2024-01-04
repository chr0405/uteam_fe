import React from 'react'
import LogoImg from '../Img/LogoImg.png'
import { Link } from 'react-router-dom'
import LoginControl from './LoginControl'

export default function Header({ isLoggedin, setIsLoggedin }) {
  return (
    <>
      <div className='Header'>
          <Link to="/">
              <img id='LogoImg' src={LogoImg} alt="LogoImg"/>
          </Link>
          <LoginControl isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
      </div>
    </>
  )
}
