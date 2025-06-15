
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import CircularProgress from '@mui/material/CircularProgress';

import MessageBox from '../../layouts/MessageBox';

import {setIsLoginErrorFalse } from '../../store/auth-store';

import AuthService from '../../service/auth-service';

function Login(props) {

  const dispatch = useDispatch();

  const { login_pending, is_login_error, login_message } = useSelector((state) => state.authSlice);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const [password_error, setPasswordError] = useState(false);
  const [confirm_password_error, setConfirmPasswordError] = useState(false);
  const [email_error, setEmailError] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError(true);
    }
    else if (password !== confirm_password) {
      setConfirmPasswordError(true);
    }
    else {

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailPattern.test(email)) {
        setEmailError(true);
      }
      else {
        setEmailError(false);
      }

      setPasswordError(false);
      setConfirmPasswordError(false);

      if (password === confirm_password && password.length >= 8) {
        const register_data = {
          username: username,
          email: email,
          password: password,
        }
        dispatch(AuthService.register(register_data));
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

      <form onSubmit={handleSubmit} className='lg:w-1/3 h-[85%] flex flex-col items-center justify-around shadow-md rounded-lg p-4 bg-white'>

        <h1 className='text-black text-[2.5rem] font-bold'>Register</h1>

        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1 font-bold text-sm'>Username</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <FaRegUser className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handleChange}
              type="text" placeholder='Enter username' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
        </div>

        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1 font-bold text-sm'>Email</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <MdOutlineEmail className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handleEmailChange}
              type="email" placeholder='Enter email' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
          <span className='text-sm text-right text-red-500 cursor-pointer mt-1'>{email_error ? 'Please enter a valid email' : ''}</span>
        </div>

        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1 font-bold text-sm'>Password</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <RiLockPasswordLine className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handlePasswordChange}
              type="password" placeholder='Enter password' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
          <span className='text-sm text-right text-red-500 cursor-pointer mt-1'>{password_error ? 'Password must be at least 8 characters' : ''}</span>
        </div>
        <div className='flex flex-col justify-center w-full '>
          <span className='text-gray-500 mb-1 font-bold text-sm'>Confirm</span>
          <div className='flex flex-row items-center bg-gray-100 w-full rounded-md '>
            <RiLockPasswordLine className='text-gray-500 text-[1.5rem] ml-2' />
            <input onChange={handleConfirmPasswordChange}
              type="password" placeholder='Confirm password' className=' text-[14px] text-black rounded-md p-3 w-full outline-none' />
          </div>
          <span className='text-sm text-right text-red-500 cursor-pointer mt-1'>{confirm_password_error ? 'Passwords do not match' : ''}</span>
        </div>

        <div className='w-full '>

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
            <span className='text-sm'>Have an account? </span>
            <span
              onClick={() => props.setShowRegister(false)}
              className='ml-4 text-blue-500 cursor-pointer'>Login</span>
          </div>
        </div>


      </form>

    </div>
  )
}

export default Login