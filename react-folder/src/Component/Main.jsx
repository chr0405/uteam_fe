import React from 'react'
import Basic from '../Img/Basic.png';
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="Main">
        <Link to="/Cook">
            <button>
                <img src={Basic} alt="Cook" width='10' height='10'/>
            </button>
        </Link>
        
        <Link to="/Cleaning">
            <button>
                <img src={Basic} alt="Cleaning" width='10' height='10'/>
            </button>
        </Link>

        <Link to="/Interior">
            <button>
                <img src={Basic} alt="Interior" width='10' height='10'/>
            </button>
        </Link>

        <Link to="/Storage">
            <button>
                <img src={Basic} alt="Storage" width='10' height='10'/>
            </button>            
        </Link>

        <Link to="/Contract">
            <button>
                <img src={Basic} alt="Contract" width='10' height='10'/>
            </button>
        </Link>

        <Link to="/Goods">
            <button>
                <img src={Basic} alt="Goods" width='10' height='10'/>
            </button>
        </Link>
    </div>

  )
}
