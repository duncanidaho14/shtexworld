import React from 'react';

const Message = ({ pseudo, message }) => {
    return (
        <aside className='user-message'>
           <ul className='list-group'>
               <li className="list-group-item active">{ pseudo } : </li>
               <li className="list-group-item active">{ message }</li>
           </ul>   
        </aside>
    )
}

export default Message
