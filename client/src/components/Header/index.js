import React, { useEffect } from 'react';
import './index.css';
import { QUERY_ME } from "../../utils/queries"
import { useQuery } from "@apollo/react-hooks"
import { useStoreContext } from "../../utils/GlobalState"
import { Link } from 'react-router-dom';

function Header() {
  const { loading, error, data } = useQuery(QUERY_ME)
  const { globalStore, dispatch } = useStoreContext()
  useEffect(function () {
  
    if (data !== undefined) {
      dispatch({
        type: "LOGIN",
        payload: data.me
      })
    } 
  }, [data]);
  console.log(data);
  return (
    <div className="HeaderContainer">
      {loading ? <p></p>: <p></p>}
      <Link to="/" className="HeaderLogo"/>
    </div>
  );
}

export default Header;
