// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData('/api/protected');
        setData(result);
        toast.success('Data retrieved successfully!');
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch data. Please try again later.');
      }
    };

    getData();
  }, []);

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    
    toast.success('You have logged out successfully.');
    setTimeout(() => {
      nav('/');
    }, 2000); 
  };

  return (
    <div className="dashboard">
      <ToastContainer/>
        <h2>Dashboard</h2>
        <h4>Great! The login was successful and the data is retrieved properly here as per the user's authorization!</h4>
        {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
        <button onClick={handleLogout}>Logout</button>
  </div>  
  );
};

export default Dashboard;
