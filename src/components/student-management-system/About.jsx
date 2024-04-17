// About.js
import React from 'react';
import VoterIdImage from '../images/2559156298_Vincent Van Gogh styled potrait of an Indian male _xl-beta-v2-2-2.jpg';
import './studentmanagementsystem.css';

function About() {
  return (
    <div className="container">
      <div className="table-container">
        <h1>About Us</h1>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>Lobhas Paithankar</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>lobhasap@gmial.com</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>8600719800</td>
            </tr>
            <tr>
              <td>Work Experience:</td>
              <td>Student</td>
            </tr>
            <tr>
              <td>Degree:</td>
              <td>Bachelor's in Computer Science</td>
            </tr>
            <tr>
              <td colSpan="2">
                <img src={VoterIdImage} alt="Profile" /> {/* Use the imported image */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;
