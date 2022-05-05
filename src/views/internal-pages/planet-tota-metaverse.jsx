import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import CustomCardV3 from '../../components/cards/custom-cardV3';
import { Container, Row, Col } from 'react-bootstrap';
import { bg7, placeholder_lg } from '../../assets/img';
import dit_video from '../../assets/video/dit1.mp4';

class PlanetTotaMetaVerse extends Component {
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
                    btn: 'none',
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: 'none',
                },
                {
                    img: bg7,
                    hd: 'Profile 1',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    sup: ['Supar Strength', 'Super Speed'],
                    cat: ['Humans'],
                    btn: 'none',
                },
            ]
        }
    }
    componentDidMount() {
        document.title = "Planet Tota Metaverse | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <Banner
                    source={dit_video} />
                <main className='meet_firsts_page planet_tota_mv_page'>
                    <section className='meet_firsts_sec planet_tota_mv_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Planet Tota Metaverse
                                    </h2>
                                    <p className="col_para">
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

export default PlanetTotaMetaVerse;