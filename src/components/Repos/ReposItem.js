import React from 'react';
import PropTypes from 'prop-types'


export const ReposItem = ({repo}) => {
  return (
    <div className="card pl-5 my-2 p-2">
      <h3>
         <a style={{ textDecoration: 'none'}} href={repo.html_url}>{repo.name}</a>
      </h3>
      </div>
  )
}

ReposItem.propTypes ={
   repo: PropTypes.object.isRequired
}
export default ReposItem;
