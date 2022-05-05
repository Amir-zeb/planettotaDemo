import React, { Component } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import OrangeBtn from '../../components/btn/orangebtn';
import { video_placeholder } from '../../assets/img';
import CustomCardV4 from '../../components/cards/custom-cardV4';
import dit_video from '../../assets/video/dit1.mp4';
import FilterLang from '../../components/filterlang';

class SepMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    poster: video_placeholder,
                    source: dit_video,
                    hd: 'Teaser 1',
                    para: 'Lorem, a ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
                {
                    poster: video_placeholder,
                    source: dit_video,
                    hd: 'Teaser 2',
                    para: 'Lorem, a ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
                {
                    poster: video_placeholder,
                    source: dit_video,
                    hd: 'Teaser 3',
                    para: 'Lorem, a ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
            ],
            modalShow: false,
        }
    }
    componentDidMount() {
        document.title = "Sep In Production | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <main className='top_padd sep_in_production_page'>
                    <section className='intro_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Sep In Production
                                    </h2>
                                    <p className="col_para">
                                        Lorem, a ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='sep_in_production_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <FilterLang />
                                    <div className="flex_wrapper">
                                        <CustomCardV4
                                            cards={this.state.cards}
                                        />
                                    </div>
                                    <h2 className="col_hd text-center">
                                        Few Notes On Production
                                    </h2>
                                    <p className="col_para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                    <OrangeBtn
                                        url="/"
                                        txt="Buy Sep NFTs"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </section >
                </main >
                <Footer />
            </>
        );
    }
}

export default SepMovie;