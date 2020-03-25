import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';
import GithubContext from '../../context/github/githubContext';


const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, getUserRepos, loading, user, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disabled-next-line
  }, []);

  const { avatar_url, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;


  if (loading) return <Spinner />;
  return (
    <Fragment>
      <div className="card UserCard">
        <div className="card-body">
          <Link to='/' className="btn btn-light"> Back to Search </Link>
          <div className="row no-gutters justify-content-sm-center  mt-5">
            <div className="col-sm-4 ">
              <img src={avatar_url} className="rounded" alt="Profile" style={{ width: '150px' }} />
              <h4 className="mt-1">{login}</h4>
         Hireable :{' '}
              {hireable ? 'Yes' : 'No'}
              <br />
              {blog && <Fragment>
                <strong> Website:</strong>
                <p>{blog}</p>
              </Fragment>}
            </div>
            <div className="col-sm-4 align-items-center ">
              {bio && <Fragment>
                <h3>Bio :</h3>
                <p>{bio}</p>
              </Fragment>}

              <a href={html_url} className="btn btn-outline-secondary">View Github Profile</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center mt-2 ">
        <div className="card-body d-sm-flex flex-md-row justify-content-around container-fluid">
          <h3><span className="badge badge-pill badge-primary m-1">Followers : {followers}</span></h3>
          <h3><span className="badge badge-pill badge-secondary m-1">Following : {following}</span></h3>
          <h3><span className="badge badge-pill badge-danger m-1"> Public Repos : {public_repos}</span></h3>
          <h3><span className="badge badge-pill badge-success m-1"> Public Gist : {public_gists}</span></h3>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  )
}

export default User
