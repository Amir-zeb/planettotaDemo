import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Section(props) {
    const { img, hd, para, btn, col1class } = props;
    return (
        <>
            <Row>
                <Col lg={6} md={6} sm={12} className={col1class}>
                    <h4>{hd}</h4>
                    <p>{para}</p>
                    {btn && btn}
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="img_wrapper">
                        <img src={img} alt={img} className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Section;