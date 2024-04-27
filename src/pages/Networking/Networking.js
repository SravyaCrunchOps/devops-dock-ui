import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Networking.css';


const networkItems = [
  { id: 1, name: 'IPv4', href: 'ipv4' },
  { id: 2, name: 'IPv6', href: 'ipv6' },
];


function Networking() {

  const [isActive, setIsActive] = useState(false);

  const handleActiveState = (id) => {
    setIsActive(id)
  }


  return (
    <main className='container-fluid p-0 m-0 main-container'>
      <div className='container pt-5 cidr'>
        <ul className="network nav justify-content-evenly rounded rounded-5 mb-3">
          {networkItems.map(item => {
            <li className="nav-item" key={item.id}>
              <Link className={isActive === item.id ? 'nav-link nav-active' : 'nav-link'} to={`/networking/${item.href}`} onClick={() => handleActiveState(item.id)}>
                {item.name}
              </Link>
          </li>
          })}
        </ul>
        
        <Outlet />
      </div>
    </main>
  )
}

export default Networking;