import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";
import './index.css';

function UserInfo() {

  // const { loading, data } = useQuery(QUERY_USER);
  // console.log('user data', data);

  return (
    <div className="UserInfoContainer">
      {/* {!loading && data.user(user => (
        <div className="UserListing" key={user._id}>
          <div className="UsernameDisplay">
              <div>{user.username}</div>
          </div>
        </div>
      ))} */}
      <button className="UserInfoProfileBtn">Profile</button>
      <button className="UserInfoDonateBtn">Donate</button>
      <button className="UserInfoLogoutBtn"> Logout
        <a href="/" onClick={() => Auth.logout()}></a>
      </button>
    </div>
  );
}

export default UserInfo;