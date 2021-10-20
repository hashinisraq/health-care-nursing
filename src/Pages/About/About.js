import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="features">
                <h2 style={{ paddingBottom: "20px" }}><u>What We Do!</u></h2>
                <Row xs={1} md={2} className="g-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>HOME NURSING CARE</Card.Title>
                                <Card.Text>
                                    Home nursing services encompasses a wide range of healthcare services that can be easily administered at your home. Home care nursing services are usually cheaper than hospitals and nursing homes, while being just as effective as the medical care offered in a hospital or nursing home. An in-home nursing service offers personalized nursing care at home as offered in a typical hospital while being more compassionate towards the patient and gets integrated into the patient’s family and develops an emotional bond with the patient.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>BABY CARE SUPPORT</Card.Title>
                                <Card.Text>
                                    Baby Care Support in Dhaka Bangladesh otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from six weeks to thirteen years. New Home Born Baby Care is the action or skill of looking after children by a day-care center, nannies, babysitter, teachers or other providers. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>GERIATRIC SENIOR CARE</Card.Title>
                                <Card.Text>
                                    Home Elderly Care,One of the aims of elderly care is to help elderly people and those with disabilities live normal, independent lives. This includes living in their own homes as long as possible.Elderly Home Patient Cares are trained yet affordable to take care of your loved ones specially who require assistance with various daily living activities. Our Caregivers can facilitate with the client’s hygiene demand, assist with mobilization, facilitate with feeding.They’re going to conjointly play a job in promoting the mental state of the consumer by occupying them with numerous activities once they are awake and up to it.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>CRITICAL CARE NURSING</Card.Title>
                                <Card.Text>
                                    Our home care nursing services provide support for people in many ways ranging from a one hour visit to 24 hour live-in care. We provide on demand visiting nurses, personal or private nurse at home or in hospital to take care of patient with highest level of satisfaction.  From the moment our nursing staff walk into a patient's life they are there to help support them physically, emotionally and mentally. Each client is assigned their own carefully screened caregiver based on their needs and care plan evaluation. Our specialized nursing team provides acute home care to patients with multiple medical challenges.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="best-section">
                <Row xs={1} md={1} className="g-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="title"><u>WHY WE ARE THE BEST!</u></Card.Title>
                                <Card.Text>
                                    Nursing care services that conveniently come for the comfort of patients and their families. Health Care Nursing(HCL) transformative journey has redefined the health care landscape over the last few Years with its mission of delivering quality health care to millions of people. In keeping with this mission, this agency, your loved ones, are more valuable to you than your life. From that humanitarian value, we are always with you on the "Health Care Nursing" service. Our service is to look after your loved ones, the elderly and the sick. Service is our religion, service is our work.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default About;