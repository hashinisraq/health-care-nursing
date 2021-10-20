import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowDetails.css';


const ShowDetails = (props) => {
    const nurse = props.nurse[0];
    return (
        <Row xs={1} md={1} className="selected-nurse g-4">
            <Col>
                <Card>
                    <Card.Body>
                    <img src={nurse?.image} alt="" />
                        <Card.Text>
                            <h5>Name: {nurse?.name}</h5>
                            <h5>Age: {nurse?.age}</h5>
                            <h5>Phone: {nurse?.phone}</h5>
                            <h5>Status: {nurse?.status}</h5>
                            <h5>Job: {nurse?.job}</h5>
                            <h5>Experience: {nurse?.experience}</h5>
                            <h5>Description: {nurse?.details}</h5>
                            <Link to={`/booking/${nurse?.id}`}><Button variant="dark">Book Now</Button></Link>
                        </Card.Text>
                     </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ShowDetails;