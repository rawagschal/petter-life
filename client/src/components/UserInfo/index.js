import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";
import './index.css';
import { useStoreContext } from "../../utils/GlobalState";

function UserInfo() {

  // const { loading, data } = useQuery(QUERY_USER);
  // console.log('user data', data);
   const { globalStore, dispatch } = useStoreContext()
  return (
    <div className="UserInfoContainer">

      {/* {!loading && data.user(user => (
        <div className="UserListing" key={user._id}>
          <div className="UsernameDisplay">
              <div>{user.username}</div>
          </div>
        </div>
      ))} */}
      <h3>{globalStore.user.username}</h3>
      <button className="UserInfoProfileBtn">Profile</button>
      <button className="UserInfoDonateBtn">Donate</button>
      <button className="UserInfoLogoutBtn" onClick={() => Auth.logout()}>Logout</button>
    </div>
  );
}

export default UserInfo;