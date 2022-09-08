import React from 'react'

function table(props) {
    const {user}=props
    return (
        <>
        {user.map((user)=>
            <tr>
                <td className='slot'>{user.user}</td>
                <td className='slot'>{user.phone}</td>
                <td className='slot'>{user.email}</td>
            </tr>
        )}
        </>
    )
}

export default table