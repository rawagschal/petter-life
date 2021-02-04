import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";
import "./index.css";
import { useStoreContext } from "../../utils/GlobalState";

function UserInfo() {
  // const { loading, data } = useQuery(QUERY_USER);
  // console.log('user data', data);
  const { globalStore, dispatch } = useStoreContext();
  return (
    <div className="UserInfoContainer">
      {/* {!loading && data.user(user => (
        <div className="UserListing" key={user._id}>
          <div className="UsernameDisplay">
              <div>{user.username}</div>
          </div>
        </div>
      ))} */}
    
      {/* had to change <div className="UserInfoTitle">Hello, {globalStore.user.username}!</div>because user starts as a null.  */}
    
      {globalStore.user === null ? (
        <p>Loading</p>
      ) : (
        <div className="UserInfoTitle">Hello, {globalStore.user.username}!</div>
      )}
      <Link to="/savedPets" className="UserInfoSavedPetsBtn">
        Saved Pets
      </Link>
      <Link to="/donate" className="UserInfoDonateBtn">
        Donate
      </Link>
      <Link to="/about" className="UserInfoAboutBtn">About</Link>
      <Link to="/" className="UserInfoLogoutBtn" onClick={() => Auth.logout()}>
        Logout
      </Link>
    </div>
  );
}

export default UserInfo;
