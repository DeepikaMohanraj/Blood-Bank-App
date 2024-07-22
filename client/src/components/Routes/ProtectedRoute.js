import React, { useEffect } from "react";
import { useDispatch } from "react-redux";//useDispatch is imported from react-redux to dispatch actions to the Redux store.
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";//It is particularly useful for redirecting users from one route to another under certain conditions, such as after form submission or authentication.
const ProtectedRoute = ({ children }) => {//children=prop
  const dispatch = useDispatch();
//getUser is an asynchronous function that makes an API call to fetch the current user's data,
//If the API call is successful and the response indicates success, 
//it dispatches the getCurrentUser action with the user data.
//If there is an error (e.g., the user is not authenticated), 
//it clears the local storage and logs the error.
  //get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {//token irunchuna enna page req pandromo athu return agum
    return children;
  } else {
    return <Navigate to="/login" />;//ellana login page return agirum
  }
};

export default ProtectedRoute;

//ensures only authenticated users can access certain routes. It fetches the current user from the server, 
//dispatches an action to update the Redux store with the user's data, 
//and redirects to the login page if the user is not authenticated. 