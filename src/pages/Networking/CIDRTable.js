import React from 'react'

function CIDRTable({ apiResponse }) {
    return (
        <table className='table table-bordered'>
            {apiResponse &&
              <tbody>
                <tr>
                  <th>CIDR Subnet</th>
                  <td>{apiResponse.cidr}</td>
                </tr>
                { apiResponse.result.networkAddress && 
                  <tr>    
                    <th>Network Address</th>
                    <td>{apiResponse.result.networkAddress}</td>
                  </tr>
                }
                <tr>
                  <th>First Address</th>
                  <td>{apiResponse.result.firstHost}</td>
                </tr>
                <tr>
                  <th>Last Address</th>
                  <td>{apiResponse.result.lastHost}</td>
                </tr>
                {apiResponse.result.broadcastAddress &&
                  <tr>
                    <th>Broadcast Address</th>
                    <td>{apiResponse.result.broadcastAddress}</td>
                  </tr>
                }
                {apiResponse.result.subnetMask &&
                  <tr>
                    <th>Subnet Mask</th>
                    <td>{apiResponse.result.subnetMask}</td>
                  </tr>
                }
                <tr>
                  <th>Subnet Mask Length</th>
                  <td>{apiResponse.result.cidrMask}</td>
                </tr>
                <tr>
                  <th>Num of Hosts</th>
                  <td>{apiResponse.result.usableCount}</td>
                </tr>
                <tr>
                  <th>Length</th>
                  <td>{apiResponse.result.ipCount}</td>
                </tr>
              </tbody>
            }
          </table>
    )
}

export default CIDRTable
