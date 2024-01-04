import React from 'react'
import SearchAndWrite from './SearchAndWrite'

import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

export default function Cook() {
  return (
    <div>
      <div>
      <p>요리</p>
      <SearchAndWrite/>
    </div>
      <ul>
        <li>
            <span><Link to="/CookDummy">간단하게 카레 만드는 법</Link></span>
            <div>
            <FaHeart size="20"/>
              <p>4566</p>
            </div>
            <p>ggg111</p>
        </li>
      </ul>
    </div>
    
  )
}
