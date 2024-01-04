import {React, useState, useEffect} from 'react'
import SearchAndWrite from './SearchAndWrite'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import { FaHeart } from "react-icons/fa";
import { getUser_id } from '../UserContext';

export default function Cleaning({value, setValue}) {
  setValue(1);
  console.log(value);

  const user_id = getUser_id();
  const SERVER_URL = `http://abc.umctestserver.store:3000/user/${user_id}/clean`;

  const [CleaningData, SetCleaningData] = useState(null);

  const searchCleaningTip = async() =>{
    try{
        Axios.get(SERVER_URL)
        .then(response => {
            console.log(response.data);
            SetCleaningData(response.data);
        })
        .catch(error => console.log(error));
    }catch{
        console.log('error')
    }
  }

  useEffect(() => {
    searchCleaningTip();
  }, []);

  return (
    <div>청소
      <SearchAndWrite/>
      <ul>
          <li>
              <span><Link to="/CleaningDummy">욕실 곰팡이 간단히 해결하는 방법</Link></span>
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
