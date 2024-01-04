import React from 'react'
import SearchAndWrite from './SearchAndWrite'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

export default function Contract() {
  return (
    <div>
      <div>
        <p>계약</p>
        <SearchAndWrite/>
      </div>
      <ul>
          <li>
              <span><Link to="/ContractDummy">전세 사기를 예방하기 위해서 계약 시 넣어야 할 특약 5가지</Link></span>
              <div>
              <FaHeart size="20"/>
                <p>82</p>
              </div>
              <p>지구</p>
          </li>
      </ul>
    </div>
    
  )
}
