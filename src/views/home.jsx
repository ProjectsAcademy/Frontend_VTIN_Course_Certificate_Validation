// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Functional component Home
const Home = () => {
  // State to store fetched data
  const [data, setData] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // const response = await axios.get('http://localhost:8888/test/testdbcon');
      const response = await axios.get('https://testnodeapifornetlify.netlify.app/test/testdbcon');
      console.log('API Response:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect hook to run fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  // JSX structure for the component
  return (
    <div>
      <h1>Your Data</h1>
      <div>
        <h2>{data.message}</h2>
        {/* Add other data fields as needed */}
      </div>
    </div>
  );
};

// Export the component
export default Home;
