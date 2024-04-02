import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../style/Update.css'

const Update = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        
      
        phone: "",
      
      });

      function getCsrfToken() {
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('csrftoken'))
          ?.split('=')[1]; // Use optional chaining to handle potential undefined value
      
        return cookieValue;
      }
      
      
      const navigate= useNavigate()
      const token1 = sessionStorage.getItem("token");
      
      let { userId } = useParams();
      console.log('userid is:',userId)
    
      useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${userId}/`)
          .then(response => {
            const userData = response.data;
            console.log("this is the data", userData);
            setUserData(userData);
          })
          .catch(error => {
            console.error("Error fetching user data:", error);
          });
      }, [userId]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setUserData({ ...userData, [name]: value });

        console.log('change is',userData)
      };
      useEffect(() => {
        console.log('Updated userData is', userData);
    }, [userData]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const csrfToken = getCsrfToken(); // Retrieve CSRF token

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token1}`, // Assuming you have a way to get the authToken
            'X-CSRFToken': csrfToken, // Include CSRF token in the request headers
          }
        };
      
        axios.patch(`http://127.0.0.1:8000/api/user/${userId}/`, userData, config)
        .then(response => {
          console.log("User updated successfully:", response.data);
          navigate("/");
          alert("Changes updated successfully");
        })
        .catch(error => {
          console.error("Error updating user:", error);
        });
      
      };
      
      return (
        <div className="update-profile-container">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={userData.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={userData.phone}
              name="phone"
              onChange={handleChange}
            />
          </div>
          <button className="update-button" type="submit">
            Update
          </button>
        </form>
      </div>
      

      );
    };
    
export default Update;
