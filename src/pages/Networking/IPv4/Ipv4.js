import React, { useState } from 'react';
import '../Networking.css';
import IPv4Content from './IPv4Content';
import CIDRTable from '../CIDRTable';
import SidebarTOC from '../SidebarTOC';

const Ipv4 = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5001/cidr/ipv4', {
            method: 'POST',
            body: JSON.stringify({ cidr: ipAddress }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.err) {
                    setError(data.err)
                    setApiResponse(null)
                } else {
                    setApiResponse(data)
                    setError(null)
                    setIpAddress('')
                }
            })
    };

    return (
        <>
            <h1 className='text-center font-bold mb-3 title'>IPv4 CIDR Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-group mb-3'>
                    <input
                        value={ipAddress}
                        onChange={(e) => setIpAddress(e.target.value)}
                        type='text'
                        className='form-control border-dark-subtle focus-ring focus-ring-secondary'
                        placeholder='Enter CIDR'
                        aria-label="CIDR address"
                    />
                    <button className='btn bg-secondary text-light' type='submit'>Calculate</button>
                </div>
            </form>

            {error && <p className="error">{error}</p>}

            <div className="output-box mb-5">
                <CIDRTable apiResponse={apiResponse} />
            </div>

            <article>
                <SidebarTOC />
                <IPv4Content />
            </article>
        </>
    )
};

export default Ipv4;