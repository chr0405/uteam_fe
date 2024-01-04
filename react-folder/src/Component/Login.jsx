import React from 'react'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const password_check = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

    const [id, setId] = useState('');
    const [checkId, setCheckId] = useState(false);

    const onCheckId = (id) =>{
        setId(id.target.value);
        setCheckId(true);
    }


    const [password, setPassword] = useState('');
    const [passPassword, setPassPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState(false);

    const onCheckPassword = (password) =>{
        setPassword(password.target.value);
        if(password_check.test(password.target.value)){
            setPassPassword('');
            setCheckPassword(true);
        }else{
            setPassPassword('올바른 비밀번호를 입력해 주세요.');
            setCheckPassword(false);
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        navigate('/Main');
    }

 return (
     <div id="Login_Join_div">
       <form onSubmit={onSubmit} id="Login_form">
        <h3>아이디, 비밀번호를 입력해 주세요.</h3>

         <label>아이디</label>
         <input value={id} onChange={onCheckId}></input>

         <label>비밀번호</label>
         <input type='password' value={password} onChange={onCheckPassword}></input>
         <p>{passPassword}</p>

         <input type='submit' value='확인' disabled={!(checkId && checkPassword)}></input>
         <span><Link to="/Join">회원가입</Link></span>
       </form>
     </div>
 )
}
