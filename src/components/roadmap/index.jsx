import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function RoadMap(props) {
    const { roadmap } = props;
    return (
        <section className='road_map'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="col_hd text-center">
                            {roadmap.sechd}
                        </h2>
                        <p className="col_para">
                            {roadmap.secpara}
                        </p>
                        <ul>
                            {roadmap.li.map((item, i) => {
                                return (
                                    <li key={i}>
                                        <div className='comp_percent'>
                                            <span>{item.num}</span>
                                        </div>
                                        <p>
                                            {item.txt}
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default RoadMap;