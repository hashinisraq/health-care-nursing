import React from 'react';
import useNurses from '../../../hooks/useNurses';
import Nurse from '../Nurse/Nurse';
import './Nurses.css';

const Nurses = () => {
    const [nurses] = useNurses();
    return (
        <div className="nurses-container">
            <h2 className="heading">Our Nurses</h2>
            <div className="nurse-container">
                {
                    nurses.map(nurse => <Nurse key={nurse.id} nurse={nurse}></Nurse>)
                }
            </div>
        </div>
    );
};

export default Nurses;