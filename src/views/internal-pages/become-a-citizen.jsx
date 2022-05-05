import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Col, Container, Row } from 'react-bootstrap';
import { video_placeholder, placeholder_sm, nft4 } from '../../assets/img';
import dit_video from '../../assets/video/dit1.mp4';
import CustomCardV5 from '../../components/cards/custom-cardV5';

class BecomeCitizen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'Platinum',
                    source: dit_video,
                    poster: video_placeholder,
                    extraclass: 'platinum_style',
                    vidFlag: true
                },
                {
                    title: 'Gold',
                    source: dit_video,
                    poster: video_placeholder,
                    extraclass: 'gold_style',
                    vidFlag: true
                },
                {
                    title: 'Pink',
                    source: nft4,
                    poster: nft4,
                    extraclass: 'pink_style',
                    vidFlag: false,
                },
                {
                    title: 'B&W',
                    source: nft4,
                    poster: nft4,
                    extraclass: 'bnw_style',
                    vidFlag: false,
                },
                {
                    title: 'Blue',
                    source: dit_video,
                    poster: video_placeholder,
                    extraclass: 'blue_style',
                    vidFlag: true
                },
                {
                    title: 'Green',
                    source: nft4,
                    poster: nft4,
                    extraclass: 'green_style',
                    vidFlag: false,
                },
                {
                    title: 'Yellow',
                    source: nft4,
                    poster: nft4,
                    extraclass: 'yellow_style',
                    vidFlag: false,
                },
            ]
        }
    }

    componentDidMount() {
        document.title = "Become A Citizen | PlanetTota";
    }

    render() {
        return (
            <>
                <Header />
                <main className='become_citizen_page top_padd'>
                    <section className='intro_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Know Your Passport/Privileges
                                    </h2>
                                    <p className="col_para">
                                        About Planet Tota Passports/Citizenship, how it works, how many kinds are there,
                                        what privileges comes with each, how to upgarde etc.
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='become_citizen_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <div className="flex_wrapper">
                                        <div className="col_left">
                                            <div className="inner_flex">
                                                <CustomCardV5
                                                    cards={this.state.cards}
                                                />
                                            </div>
                                        </div>
                                        <div className="col_right">
                                            <h2 className="col_hd text-center">
                                                Join us in Planet Tota to unlock higher levels of passports, benefits and access to the metaverse
                                            </h2>
                                            <p className="col_para">
                                                Placeholder for copy by marketing provide teaser for passports, benefits and ways to unlock higher levels
                                                <br /><br />
                                                Placeholder for copy by marketing provide teaser for passports, benefits and ways to unlock higher levels
                                                <br /><br />
                                                Placeholder for copy by marketing provide teaser for passports, benefits and ways to unlock higher levels
                                            </p>
                                        </div>
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

export default BecomeCitizen;