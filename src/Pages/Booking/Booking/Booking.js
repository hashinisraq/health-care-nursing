import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { nurseId } = useParams();
    
    const[nurse, setNurse] = useState([]);

    useEffect(()=>{
        fetch("/fakedb.json")
            .then(res=>res.json())
            .then(data=>setNurse(data))
    },[]);


    const selectedNurse = nurse.filter(nrs=> nrs.id === parseInt(nurseId));

    return (
        <div style={{ padding: "50px" }}>
            <h3>Your booking person is {selectedNurse[0]?.name} experience of {selectedNurse[0]?.experience}</h3>
            <h3>We will contact you to confirm this service soon</h3>
            <h2>Thank you</h2>
            <Button variant="secondary"><Link style={{ textDecoration: "none", color: "black" }} to="/home">Go Home</Link></Button>
        </div>
    );
};

export default Booking;