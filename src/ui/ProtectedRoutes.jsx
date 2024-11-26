import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!userToken) return navigate("/login");
    },
    [navigate, userToken]
  );

  if (userToken) return children;
};

export default ProtectedRoutes;

// don't touch
/*
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { userData, userToken } = useAuth();

  console.log(`userToken: ${userToken}`);
  console.log(userData);
  console.log(userData?.token);

  const navigate = useNavigate();

  // useEffect(
  //   function () {

  //   },
  //   [navigate, userToken, userData]
  // );
  console.log(userToken !== userData?.token);
  if (userToken === userData?.token) return <Navigate to="/login" />;

  if (userToken && userToken !== userData?.token) return children;
};

export default ProtectedRoutes;
*/
/*
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useVerifyToken from "../features/authentication/useVerifyToken";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { mutate, isLoading } = useVerifyToken();
  const { userData } = useAuth();
  console.log(userData);

  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    mutate(userToken);
    if (!userData?.decoded?.id) {
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [navigate, userToken, mutate, userData]);

  // If verified, render the children (protected content)
  return children;
};

export default ProtectedRoutes;
*/
/*
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { userData } = useAuth();

  const userTokenString = localStorage.getItem("userToken");
  const userTokenObj = JSON.parse(userTokenString);
  console.log(userTokenObj);
  const token = userTokenObj?.token;
  console.log(token);

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!userTokenString) {
        localStorage.setItem("userToken", userData);
      }
      if (!userTokenObj) return navigate("/login");
    },
    [navigate, userData, userTokenObj, userTokenString]
  );

  if (userTokenObj) return children;
};

export default ProtectedRoutes;
*/
