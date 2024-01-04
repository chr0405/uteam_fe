import React from 'react'
import { Link } from 'react-router-dom'

import Cook from '../Img/Cook.png';
import Cleaning from '../Img/Cleaning.png';
import Interior from '../Img/Interior.png';
import Storage from '../Img/Storage.png';
import Contract from '../Img/Contract.png';
import Goods from '../Img/Goods.png';

export default function Main({value, setValue}) {
  return (
    <div className="Main">
        <Link to="/Cook">
            <button>
                <img src={Cook} alt="Cook"/>
            </button>
        </Link>
        
        <Link to="/Cleaning">
            <button>
                <img src={Cleaning} alt="Cleaning"/>
            </button>
        </Link>

        <Link to="/Interior">
            <button>
                <img src={Interior} alt="Interior"/>
            </button>
        </Link>

        <Link to="/Storage">
            <button>
                <img src={Storage} alt="Storage"/>
            </button>            
        </Link>

        <Link to="/Contract">
            <button>
                <img src={Contract} alt="Contract"/>
            </button>
        </Link>

        <Link to="/Goods">
            <button>
                <img src={Goods} alt="Goods"/>
            </button>
        </Link>
    </div>

  )
}
