// NavIcon.jsx
import React from 'react';
import { Link, useMatch } from "react-router-dom";
import Tooltip from './Tooltip';

function NavIcon({ to, icon: Icon, label }) {
  const match = useMatch(to);

  return (
    <Tooltip text={label}>
      <Link to={to}>
        <div className={`my-3 text-white hover:bg-blue-400 px-[10px] py-[10px] flex items-center rounded-lg ${match ? 'bg-blue-400' : ''}`}> 
          <Icon className={`text-[1.6rem] ${match ? '' : ''}`} />
        </div>
      </Link>
    </Tooltip>
  );
}

export default NavIcon;