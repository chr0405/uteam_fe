import React from 'react'
import LogoImg from '../Img/LogoImg.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className='Header'>
          <Link to="/">
              <img id='LogoImg' src={LogoImg} alt="LogoImg"/>
          </Link>
      </div>
    </>
  )
}
