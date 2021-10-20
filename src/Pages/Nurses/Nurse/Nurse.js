import { Button } from 'react-bootstrap';
import React from 'react';
import './Nurse.css';
import { Link } from 'react-router-dom';

const Nurse = ({ nurse }) => {
    const { id, name, age, job, image, details } = nurse;
    return (
        <div className="nurse">
            <img src={image} alt="" />
            <h5>Name: {name}</h5>
            <h5>Age: {age}</h5>
            <h5>Job: {job}</h5>
            <h5>Description: {details}</h5>
            <Link to={`/details/${id}`}><Button variant="dark">See Details</Button></Link>
            <Link to={`/booking/${id}`}><Button variant="dark">Book Now</Button></Link>
        </div >
    );
};

export default Nurse;