import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user: { login, avatar_url, html_url } }) => {

  return (
    <div className='card cardItem text-center'>
      <div className="card-body">
        <img src={avatar_url} className='rounded-circle' alt="Profile" style={{ width: '80px' }} />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-outline-dark btn-sm my-1">More</Link>
      </div>
    </div>
  )

}


export default UserItem
