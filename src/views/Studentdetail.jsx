// // Import necessary dependencies
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Functional component Home
// const Home = () => {
//   // State to store fetched data
//   const [data, setData] = useState([]);

//   // Function to fetch data from the API
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8888/studentData/accomplishments/verify/1');
//       // const response = await axios.get('https://api-vtin-course-cert-validation.netlify.app/test/testdbcon');
//       console.log('API Response:', response.data);

//       // // Check if the response contains the 'result' property with an array
//       // const dataArray = response.data.hasOwnProperty('result')
//       //   ? response.data.result
//       //   : [];

//       setData(response.data);
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // useEffect hook to run fetchData on component mount
//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array ensures it runs only once on mount

//   // JSX structure for the component

//   return (

//     <div>
//       <h1>Your Data</h1>
//       {data && data.hasOwnProperty('studentData') ? (
//         <div>
//           <p>Student ID: {data.studentData.stu_id}</p>
//           <p>Student Name: {data.studentData.studentName}</p>
//           <p>Course Name: {data.studentData.courseName}</p>
//           <p>Completion Date: {data.studentData.completionDate}</p>
//           <img
//             src={data.studentData.certificateLink}
//             alt={`Certificate for ${data.studentData.studentName}`}
//             style={{ maxWidth: '100%', height: 'auto' }}
//           />
//           <hr />
//         </div>
//       ) : (
//         <p>No valid data available</p>
//       )}
//     </div>
//   );
// };

// // Export the component
// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studentdetail = ({ stuId }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api-vtin-course-cert-validation.netlify.app/studentData/accomplishments/verify/${stuId}`);
      console.log('API Response:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [stuId]);

  return (
    <div>
      <h1>Your Data</h1>
      {data && data.hasOwnProperty('studentData') ? (
        <div>
          <p>Student ID: {data.studentData.stu_id}</p>
          <p>Student Name: {data.studentData.studentName}</p>
          <p>Course Name: {data.studentData.courseName}</p>
          <p>Completion Date: {data.studentData.completionDate}</p>
          <img
            src={data.studentData.certificateLink}
            alt={`Certificate for ${data.studentData.studentName}`}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <hr />
        </div>
      ) : (
        <p>No valid data available</p>
      )}
    </div>
  );
};

export default Studentdetail;


