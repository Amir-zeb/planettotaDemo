import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { nft1, nft2, nft3, nft4, placeholder_md } from '../assets/img';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CustomCardV2 from '../components/cards/custom-cardV2';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    img: nft1,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: nft2,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: nft3,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: nft4,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
            ]
        }
    }
    render() {
        return (
            <>
                <Header />
                <main className='about_us_page top_padd'>
                    <section className='intro_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Tota Creator's Collective
                                    </h2>
                                    <p className="col_para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quisquam reprehenderit suscipit dolor, eius necessitatibus qui quibusdam placeat delectus accusamus assumenda eaque! Dolorem modi rerum ipsam voluptates error, cum recusandae?
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quisquam reprehenderit suscipit dolor, eius necessitatibus qui quibusdam placeat delectus accusamus assumenda eaque! Dolorem modi rerum ipsam voluptates error, cum recusandae?
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='about_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Tota Creator's Collective
                                    </h2>
                                    <p className="col_para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, quisquam reprehenderit suscipit dolor, eius necessitatibus qui quibusdam placeat delectus accusamus assumenda eaque! Dolorem modi rerum ipsam voluptates error, cum recusandae?
                                    </p>
                                    <div className="flex_wrapper">
                                        <CustomCardV2
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

export default AboutUs;