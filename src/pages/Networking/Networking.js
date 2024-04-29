import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Networking.css';


const networkItems = [
  { id: 1, name: 'IPv4', href: 'ipv4' },
  { id: 2, name: 'IPv6', href: 'ipv6' },
];


const Networking = ()  => {
  return (
    <main className='container-fluid p-0 m-0 main-container'>
      <div className='w-75 mx-auto d-flex pt-5 cidr'>
        <div className='me-3'>
          <Outlet />
        </div>

        <div className='sidebar w-75 p-3 rounded-2' style={{height: '10em'}}>
          <h4>Other network tools</h4>
          <div className='list-group list-group-flush'>
            {networkItems.map(item => (
                <Link className='list-group-item' key={item.id} to={`/networking/${item.href}`}>{item.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Networking