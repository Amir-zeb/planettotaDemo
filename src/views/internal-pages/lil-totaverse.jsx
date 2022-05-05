import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCardV3 from '../../components/cards/custom-cardV3';
import { bg7 } from '../../assets/img';

class LilTotaVerse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: '0',
                    lock: true
                },
            ]
        }
    }
    componentDidMount() {
        document.title = "Lil' Tota Verse | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <main className='meet_firsts_page top_padd'>
                    <section className='intro_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Meet The TotaVerse
                                    </h2>
                                    <p className="col_para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='meet_firsts_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <p className="col_para">
                                        <strong className='d-block'>[Placeholder: How to unlock the 3D profile]</strong>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                    <div className="flex_wrapper">
                                        <CustomCardV3
                                            cards={this.state.cards}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default LilTotaVerse;