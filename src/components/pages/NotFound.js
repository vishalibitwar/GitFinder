import React from 'react';
import PageNotFound from './PageNotFound.png';
import Octocat from './Octocat.png';

const NotFound = () => {
  return (
    <div className="row  bg-dark p-5 rounded mt-5">
      <div className="col-sm text-center">
      <img className="img-fluid mr-sm-3 mr-0" src={PageNotFound} alt="" />
      <img className="img-fluid mt-sm-0 mt-2" src={Octocat} alt="" />
      </div>
    </div>
  )
}

export default NotFound
