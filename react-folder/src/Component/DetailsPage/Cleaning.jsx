import React from 'react'
import SearchAndWrite from './SearchAndWrite'
import { Link } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";

export default function Cleaning({value, setValue}) {
  setValue(1);
  console.log(value);

  return (
    <div>청소
      <SearchAndWrite/>
      <ul>
          <li>
              <span><Link to="/Join">욕실 곰팡이 간단히 해결하는 방법</Link></span>
              <div>
              <FaHeart size="20"/>
                <p>22</p>
              </div>
              <p>osc0820</p>
          </li>
      </ul>
    </div>
  )
}
