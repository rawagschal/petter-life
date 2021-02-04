import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";
import './index.css';
// import { Donate } from '../DonationForm/index';

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
      <Link className="UserInfoProfileBtn">Profile</Link>
      <Link className="UserInfoDonateBtn" to="/donate">Donate</Link>
      <Link className="UserInfoLogoutBtn"> Logout
        <a href="/" onClick={() => Auth.logout()}></a>
      </Link>
    </div>
  );
}

export default UserInfo;