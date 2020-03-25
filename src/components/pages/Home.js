import React,{ Fragment , useContext} from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Octocat from './home.svg';
import GithubContext from '../../context/github/githubContext';




const Home = () => {
  const githubContext = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <Users />
      {githubContext.users.length <= 0 &&  <div className="text-center mt-5">
        <img src={Octocat}  className="img-fluid" style={{ width:'400px', height: '400px'}} alt=""/>
      </div> }

    </Fragment>
  )
}

export default Home
