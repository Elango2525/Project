import React from 'react';
import { Link } from 'react-router-dom';
import './Com.css'
function Street() {
  return (
    <>
    <h2 className="he">Based on Electricity Problems</h2>
    <textarea id="box" rows="20" cols="100" placeholder="Add Your Complaints/Description About The Problem Here"></textarea><br></br><br></br>
    <p id='pa'>Upload an image for Proof:</p>
    <input type="file" className="btn"></input><br></br><br></br> 
    <div class="btn1"><Link to="/Submit">Submit</Link></div>
    </>
  )
}
export default Street
