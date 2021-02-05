import React, { createContext, useContext, useReducer } from "react";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// instantiate the global state object
const StoreContext = createContext();
// const { Provider } = StoreContext;
const initialState = { user: null };
//action object- { type: "", payload: }
// VVV From Shop-Shop
// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     categories: [],
//     currentCategory: ''
//   });
//   console.log(state);
//   return <Provider value={[state, dispatch]} {... props} />;
// };

const useStoreContext = () => {
  return useContext(StoreContext);
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return {
        ...state,
        user: action.payload,
      };
     
    default:
      break;
  }
}

function Store(props) {
  const [globalStore, dispatch] = useReducer(reducer, initialState);
  return (
   <StoreContext.Provider value={{globalStore, dispatch}}>
     {props.children}
   </StoreContext.Provider> 
  )
}

export { Store, useStoreContext };
