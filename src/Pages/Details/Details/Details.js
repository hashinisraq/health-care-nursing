import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import ShowDetails from '../ShowDetails/ShowDetails';

const Details = () => {
    const { nurseId } = useParams();
    const[nurse, setNurse] = useState([]);

    useEffect(()=>{
        fetch("/fakedb.json")
            .then(res=>res.json())
            .then(data=>setNurse(data))
    },[]);


    const selectedNurse = nurse.filter(nrs=> nrs.id === parseInt(nurseId));
    

    return (
        <div>
            <ShowDetails key={selectedNurse.id} nurse={selectedNurse}></ShowDetails>
        </div>
    );
};

export default Details;