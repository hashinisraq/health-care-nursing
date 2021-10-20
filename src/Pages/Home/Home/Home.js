import Banner from '../Banner/Banner';
import './Home.css';
import useNurses from '../../../hooks/useNurses';
import Nurse from '../../Nurses/Nurse/Nurse';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    const [nurses] = useNurses();
    let selectedNurse = [];

    for (const nrs of nurses) {
        if (nrs.id <= 6) {
            selectedNurse.push(nrs);
        }
    }

    return (
        <div className="home-container">
            <div className="heading">
                <h6>Welcome To</h6>
                <h2>Health Care Nursing</h2>
            </div>

            <div className="banner-container">
                <Banner></Banner>
            </div>

            <div className="nurses-container">
                <h3><u>Our Nurses</u></h3>
                <div className="nurses">
                    {
                        selectedNurse.map(nurse => <Nurse
                            key={nurse.id}
                            nurse={nurse}
                        ></Nurse>)
                    }
                </div>
                <Button variant="secondary">
                    <Link className="see-more-btn" to="/nurses">See All</Link>
                </Button>
            </div>

        </div >
    );
};

export default Home;