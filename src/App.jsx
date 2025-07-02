
import { useEffect } from 'react';

import {RouterProvider} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import AuthService from './service/auth-service';

import DashboardService from './service/dashboard-service';

import './App.css'

import router from "./router";


function App() {

  const dispatch = useDispatch();

  const is_auth = useSelector((state) => state.authSlice.is_auth);

  useEffect(() => {
    if (!is_auth) {
      dispatch(AuthService.refresh());
    }
  }, [is_auth]);

  
  useEffect(() => {
    dispatch(DashboardService.get_language_pair_stats());
  }, []);

  return (
     <RouterProvider router={router} />
  )
}

export default App
