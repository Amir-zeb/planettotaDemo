import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import Banner from '../../components/banner';
import dit_video from '../../assets/video/dit1.mp4';
import {
    icon_thunder, placeholder_lg, placeholder_md,
    nft1,
    nft2,
    nft3,
    nft4,
    nft6,
    bg1,
    bg2,
} from '../../assets/img';
import Section from '../../components/section';
import RoadMap from '../../components/roadmap';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CustomCardV2 from '../../components/cards/custom-cardV2';

class NftComingSoonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmap: {
                sechd: 'Roadmap',
                secpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                li: [
                    { num: '0%', txt: 'Sep will remain the only one included in the Planet Tota Metaverse' },
                    { num: '10%', txt: "Planet Tota Immigration will clear 1 more of the 'first' to be inducted into the Metaverse" },
                    { num: '20%', txt: "Planet Tota Immigration will clear another 2 of the 'first' to be inducted into the Metaverse" },
                    { num: '40%', txt: "Planet Tota Immigration will clear another 2 of the 'first' to be inducted into the Metaverse" },
                    { num: '60%', txt: "Planet Tota Immigration will clear another 3 of the 'first' to be induct into the Metaverse" },
                    { num: '80%', txt: "Planet Tota Immigration will clear another 3 of the 'first' to be induct into the Metaverse. Planet Tota Customs will allow a cool MPV and helmet in, and take bribes to allow a gun in" },
                    { num: '90%', txt: "Nefarious activities will start in the Metaverse. Evil Mad Eyes and TNT's secret underground lairs pictures will be leaked" },
                    { num: '100%', txt: "Planet Tota Immigration will accept the application of the 'first'. Planet Tota Customs will allow more items and takes bribes to allow some more dangerous goods" },
                ]
            },
            cards: [
                {
                    img: placeholder_md,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: placeholder_md,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: placeholder_md,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
                {
                    img: placeholder_md,
                    title: 'Title goes here',
                    name: 'Name goes here',
                    icons: [
                        { url: '/', icon: faTwitter },
                        { url: '/', icon: faInstagram },
                    ]
                },
            ],
            accordian: [
                {
                    question: 'What is AN NFT?',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
                {
                    question: 'What is METAMASK?',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
                {
                    question: 'How to mint with metamask on a mobile phone?',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
                {
                    question: 'where does my nft go after i purchase a baby ghost?',
                    para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                },
            ],
        }
    }
    componentDidMount() {
        document.title = "NFT Minting - Mint Coming Soon | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <Banner
                    source={dit_video}
                    sec={<ComingSoonMint />}
                />
                <main className='nft_page'>
                    <section className='intro_sec first_child'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Planet Tota NFTs
                                    </h2>
                                    <p className="col_para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='nft_new_sec'>
                        <Container>
                            <Row>
                                <Col lg={9}>
                                    <h2 className="col_hd">
                                        Sep
                                    </h2>
                                    <p className="col_para text-start">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
                                </Col>
                                <Col lg={3}>
                                    <form action="">
                                        <label htmlFor="">
                                            <div className="img_wrapper">
                                                <img src={icon_thunder} alt={icon_thunder} className="img-fluid" />
                                            </div>
                                            Profile
                                        </label>
                                        <select>
                                            <option value="">Sep</option>
                                            <option value="">Sep</option>
                                            <option value="">Sep</option>
                                        </select>
                                        <div className="tags_ul">
                                            <ul>
                                                <li>
                                                    <div className="tag_cat">
                                                        <p>Superpower</p>
                                                    </div>
                                                    <div className="tags">
                                                        <Badge bg='light'>Super Strength</Badge>
                                                        <Badge bg='light'>Super Speed</Badge>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="tag_cat">
                                                        <p>Classification</p>
                                                    </div>
                                                    <div className="tags">
                                                        <Badge bg='none' className="bg_orange">Humechs</Badge>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div className="gallery">
                                        <div className="flex_cards">
                                            {['', '', '', '', '', '', '', '', '', '', '', '',].map((item, i) => {
                                                return (
                                                    <div key={i} className='img_wrapper'>
                                                        <img src={nft1} alt={placeholder_lg} className="img-fluid" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='common_sec inverse_col'>
                        <Container>
                            <Section
                                hd='50 sahdes of Planet Tota'
                                para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                                img={bg1}
                            />
                        </Container>
                    </section>
                    <section className='common_sec'>
                        <Container>
                            <Section
                                img={bg1}
                                hd='NFT Benefits'
                                para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!'
                                col1class='order-1'
                            />
                        </Container>
                    </section>
                    <RoadMap
                        roadmap={this.state.roadmap}
                    />
                    <section className='nft_cards_sec'>
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
                    <section className='faq'>
                        <Container>
                            <Row>
                                <Col>
                                    <h2 className="col_hd text-center">
                                        FAQ
                                    </h2>
                                    <Accordion>
                                        {this.state.accordian.map((item, i) => {
                                            return (
                                                <Accordion.Item key={i} eventKey={i}>
                                                    <Accordion.Header>{item.question}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='para'>
                                                            <p>
                                                                {item.para}
                                                            </p>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            );
                                        })}
                                    </Accordion>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='intro_sec last_child'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Piece Of Planet Tota
                                    </h2>
                                    <p className="col_para">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!
                                    </p>
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



function ComingSoonMint(props) {

    return (
        <div className="coming_soon_mint">
            <h2>Mint In</h2>
            <div className='timer'>
                <ul>
                    <li>
                        <p>
                            10
                            <span>Days</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            14
                            <span>Hours</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            19
                            <span>Minutes</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            50
                            <span>Seconds</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NftComingSoonPage;