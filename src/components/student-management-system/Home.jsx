import React from 'react';
import './studentmanagementsystem.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <nav>
          <ul>
            <li className="left"><a href="/">Home</a></li>
            <li className="right"><a href="/register">Register</a></li>
            <li className="right"><a href="/login">Login</a></li>
            <li className="right"><a href="/about">About Us</a></li>
          </ul>
        </nav>
      </header>
      <div className="welcome-section">
        <h2>Student Management System</h2>
      </div>
      
      <div className="empowerment-section">
        <div className="image-overlay">
          
          <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital Empowerment" />
        </div>
      </div>
      <div className="contact-us-section">
        <h2>Contact Us</h2>
        <p>Thank you for using our Student Management System! If you have any questions, feedback, or concerns, please don't hesitate to reach out to us. Our dedicated support team is here to assist you.

         Technical Support:
         For technical assistance or help with system issues, please contact our support team at:

         Email: support@yourstudentmanagementsystem.com
         Phone: +1 (800) 123-4567
         Operating Hours: Monday to Friday, 9:00 AM - 5:00 PM (EST)
           <br></br>
           Address:
           Student Management System Headquarters
           123 Main Street
           City, State, Zip Code
           <br></br>
           Office Hours:
           Monday - Friday: 9:00 AM to 5:00 PM (local time)
           <br></br>
           Support:
           For technical support or assistance, please contact our support team at support@studentmanagementsystem.com or call our dedicated support line at +1 (555) 987-6543.</p>
      </div>
    </div>
  );
}

export default Home;
