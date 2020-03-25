import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';



const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please Enter Something...', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  }

  const onChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" className="form-control" onChange={onChange} value={text} placeholder="Search Users..." id="" />
        <input type="submit" className="my-3 btn btn-dark btn-block" value="Submit" />
      </form>
      {githubContext.users.length > 0 && <button className="btn btn-light btn-block mb-3" onClick={githubContext.clearUsers}  >Clear</button>}

    </div>
  )
}


export default Search
