import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className={props.extraclass}>
            <Container>
                <Row>
                    <Col>
                        <div className="colphon">
                            <p className='copyright'>2021 &copy; Copyright planettota.com. All rights reserved.</p>
                            <ul className='links_wrapper'>
                                <li><Link to='/'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                <li><Link to='/'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                <li><Link to='/'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                <li><Link to='/'><FontAwesomeIcon icon={faYoutube} /></Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;