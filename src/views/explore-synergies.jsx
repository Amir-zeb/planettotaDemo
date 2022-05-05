import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import OrangeBtn from '../components/btn/orangebtn';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import CustomCardV1 from '../components/cards/custom-cardV1';
import MyModal from '../components/modal/mymodal';
import GetInTouchFrom from '../components/forms/get-in-touch';
import { bg7, placeholder_lg } from '../assets/img';

class ExploreSynergies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    hd: 'About Tota IP',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    img: bg7,
                    btn: <OrangeBtn
                        txt='Get In Touch'
                        clickEvent={() => this.OpenMyModal()}
                        icon={faLongArrowAltRight} />
                },
                {
                    hd: 'About Tota Wow',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                    img: bg7,
                    btn: <OrangeBtn
                        txt='Get In Touch'
                        clickEvent={() => this.OpenMyModal()}
                        icon={faLongArrowAltRight} />
                },
            ],
            modalShow: false,
        }
    }

    componentDidMount() {
        document.title = "Explore Synergies | PlanetTota";
    }

    OpenMyModal = () => {
        return this.setState({ modalShow: true });
    }

    BtnComponent = () => {
        return <OrangeBtn
            txt='Get In Touch'
            clickEvent={() => this.OpenMyModal()}
            icon={faLongArrowAltRight} />
    }

    render() {
        const { modalShow } = this.state;
        return (
            <>
                <Header />
                <main className='exp_synergy_page top_padd'>
                    <section className='synergy_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Explore Synergies
                                    </h2>
                                    <p className="col_para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                    <div className="flex_wrapper">
                                        <CustomCardV1
                                            cards={this.state.cards}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <MyModal
                            show={modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                            bodycontent={<GetInTouchFrom />}
                            extraclass='get_in_touch_form'
                            size='width'
                        />
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default ExploreSynergies;