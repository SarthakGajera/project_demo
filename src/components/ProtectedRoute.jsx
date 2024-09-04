// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Account } from 'appwrite';
import appwriteConfig from '../Appwrite/appwriteConfig  '; // Import Appwrite configuration

const ProtectedRoute = ({ children }) => {
  const account = new Account(appwriteConfig.client); // Initialize Account instance
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        await account.get(); // Get the user's account details
        setIsAuthenticated(true); // If user data is fetched successfully, set isAuthenticated to true
      } catch (error) {
        setIsAuthenticated(false); // If there's an error (e.g., user is not logged in), set isAuthenticated to false
      }
    };

    checkUserLoggedIn(); // Check user login status on component mount
  }, []);

  // If the user is authenticated, render the children components; otherwise, redirect to login page
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
