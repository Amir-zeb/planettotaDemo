import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCardV3 from '../../components/cards/custom-cardV3';
import { bg7 } from '../../assets/img';
import OrangeBtn from '../../components/btn/orangebtn';

class MeetFirsts extends Component {
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
                    btn: true,
                    lock: false
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: true,
                    lock: false
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: true,
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: true,
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: true,
                    lock: true
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: true,
                    lock: true
                },
            ]
        }
    }
    componentDidMount() {
        document.title = "Meet The Firsts | PlanetTota";
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
                                        Meet the Firsts
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
                                    <OrangeBtn
                                        url='/'
                                        txt='Load More'
                                        extraClass='bg_orange common_btn mx-auto mt-5'
                                    />
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

export default MeetFirsts;