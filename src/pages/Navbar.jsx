
import { useDispatch, useSelector } from 'react-redux';

import { Outlet } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { PiFloppyDisk } from "react-icons/pi";
import { PiBrainLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";



import { CiLogout } from "react-icons/ci";


import NavIcon from "../components/navbar/NavIcon";

import Auth from "../pages/Auth";

import AuthService from '../service/auth-service';


function Navbar() {

    const dispatch = useDispatch();

    const is_auth = useSelector((state) => state.authSlice.is_auth);

    return (

        <div className='relative '>

            {
                is_auth ?
                    <div className='sticky top-0 left-0 z-20  float-left h-screen flex flex-col items-center p-0 bg-[#3B82F6]'>

                        <NavIcon to="/" icon={RxDashboard} label="Dashboard" />
                        <NavIcon to="/savedwords" icon={PiFloppyDisk} label="Saved Words" />
                        <NavIcon to="/learned" icon={PiBrainLight} label="Learned" />
                        <NavIcon to="/profile" icon={FiUser} label="Profile" />

                        <div onClick={()=>{
                            let result = confirm('Are you sure you want to logout?');
                            if (result) {
                                dispatch(AuthService.userLogout());
                            }
                        }}>
                            <div className='my-3 relative text-white hover:bg-slate-500 px-[10px] py-[10px] flex items-center rounded-lg cursor-pointer'>
                                <CiLogout className='text-3xl' />
                            </div>
                        </div>

                    </div>
                    :
                    <Auth />
            }


            {
                is_auth &&
                <Outlet />
            }
            {/* <Outlet /> */}

        </div>

    )

}

export default Navbar;