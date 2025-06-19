
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import Lottie from 'react-lottie-player'
import dolphinJson from '../../assets/Animation - 1749920383202.json'


import CircularProgress from '@mui/material/CircularProgress';

import MessageBox from '../../layouts/MessageBox';

import { setIsLoginErrorFalse } from '../../store/auth-store';

import AuthService from '../../service/auth-service';


function Login(props) {

  const dispatch = useDispatch();

  const { login_pending, is_login_error, login_message } = useSelector((state) => state.authSlice);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [password_error, setPasswordError] = useState(false);
  const [email_error, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError(true);
      return;
    }
    else {

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(email)) {
        setEmailError(true);
        return;
      }
      else {
        setEmailError(false);
      }

      setPasswordError(false);

      if (password.length >= 8) {
        const login_data = {
          email: email,
          password: password,
        }
        dispatch(AuthService.login(login_data));
      }
    }

  }

  useEffect(() => {
    if (is_login_error) {
      setTimeout(() => {
        dispatch(setIsLoginErrorFalse());
      }, 2000);
    }
  }, [is_login_error]);


  return (


    <div style={{ fontFamily: "Open Sans" }}
      className='flex flex-col items-center justify-center h-screen  '>

      {
        is_login_error && <MessageBox message={login_message} color={'bg-red-500'} />
      }

  
      <form onSubmit={handleSubmit} className='w-full md:w-1/3 h-screen md:h-[85%] flex flex-col items-center justify-around shadow-md  rounded-lg p-4 bg-white'>
        <h1 className='text-black text-[2.5rem] font-bold'>Login</h1>


        <div className="w-full flex  items-center justify-center p-4">
          <Lottie
            loop
            animationData={dolphinJson}
            play
            style={{ width: 150, height: 150 }}
            className="mx-auto"
          />
        </div>


        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1'>Email</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <MdOutlineEmail className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handleEmailChange}
            type="email" placeholder='Enter your email' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
          <span className='text-sm text-right text-red-500 cursor-pointer mt-1'>{email_error ? 'Please enter a valid email' : ''}</span>
    
        </div>

        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1'>Password</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <RiLockPasswordLine className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handlePasswordChange}
            type="password" placeholder='Enter your password' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
          <span className='text-sm text-right text-blue-500 cursor-pointer mt-1'>Forgot password?</span>
          <span className='text-sm text-right text-red-500 cursor-pointer mt-1'>{password_error ? 'Password must be at least 8 characters' : ''}</span>

        </div>

        <div className='w-full '>

          {/* <button className='bg-blue-500 w-full text-white rounded-lg py-3 outline-none text-lg font-medium'>Login</button> */}

          {
            login_pending ?
              <div className='flex items-center justify-center w-full'>
                <CircularProgress size="3rem" />
              </div>
              :
              <button type='submit'
                className='bg-blue-500 w-full text-white rounded-lg py-3 outline-none text-lg font-medium cursor-pointer hover:bg-blue-400 duration-200'>Register</button>

          }


          <div className='flex flex-row w-full mt-2 items-center justify-center'>
            <span className='text-sm'>Don't have an account? </span>
            <span
              onClick={() => props.setShowRegister(true)}
              className='ml-4 text-blue-500 cursor-pointer'>Sign up</span>
          </div>
        </div>


      </form>

    </div>
  )
}

export default Login