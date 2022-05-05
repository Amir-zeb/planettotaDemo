import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Container, Row, Col, Accordion, Badge } from 'react-bootstrap';
import Banner from '../../components/banner';
import dit_video from '../../assets/video/dit1.mp4';
import { bg1, icon_success, icon_thunder, nft1, nft2, nft3, nft4, nft5, nft6, placeholder_lg, placeholder_md } from '../../assets/img';
import Section from '../../components/section';
import RoadMap from '../../components/roadmap';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import CustomCardV2 from '../../components/cards/custom-cardV2';
import OrangeBtn from '../../components/btn/orangebtn';
import MyModal from '../../components/modal/mymodal';

class PieceOfPlanetTota extends React.Component {
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
            cardimg: [nft1, nft2, nft3, nft4, nft5, nft6, nft1, nft2, nft3, nft4, nft5, nft6],
        }
    }
    componentDidMount() {
        document.title = "Own A Piece Of Planet Tota | PlanetTota";
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
                                            {this.state.cardimg.map((item, i) => {
                                                return (
                                                    <div key={i} className='img_wrapper'>
                                                        <img src={item} alt={item} className="img-fluid" />
                                                    </div>
                                                );
                                            })
                                            }
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
                                img={nft6}
                            />
                        </Container>
                    </section>
                    <section className='common_sec'>
                        <Container>
                            <Section
                                img={nft4}
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
    const [comp, setcomp] = useState(<OrangeBtn
        txt='Connect Your Wallet'
        clickEvent={() => handleClick()}
    />);
    const [para, setpara] = useState(false);

    const [modalShow, setmodalShow] = useState(false);

    const handleClick = () => {
        return setcomp(chgnComponent), setpara(true);
    }

    const OpenMyModal = () => {
        return setmodalShow(true);
    }

    const chgnComponent = () => {
        return (
            <OrangeBtn
                txt='Mint It'
                clickEvent={() => OpenMyModal()}
            />
        );
    }
    return (
        <>
            <div className="connect_wallet">
                <h3>Mint Price<span>0.05</span></h3>
                <h3>supply left<span>3021</span></h3>
                <p>
                    {para ? 'Planet Tota is now connected to your Metamask Wallet' : 'Connect your Metamask wallet start minting Planet Tota NFTs'}
                </p>
                {comp}
            </div>
            <MyModal
                show={modalShow}
                onHide={() => setmodalShow(false)}
                bodycontent={<MintPopUp />}
                extraclass='mint_pop_up'
                size='width'
            />
        </>
    );
}

function MintPopUp(props) {
    return (
        <div className="popup_wrapper">
            <div className="img_wrapper">
                <img src={icon_success} alt="" className="img-fluid" />
            </div>
            <h4>Minting Successful</h4>
            <p>Your Planet Tota NFT will appear in whatever address, or connected wallet you used to purchase the Planet Total. You can see your freshly minted NFT card directly on your <a href="#" target="_blank">Opensea.io</a> account.
            </p>
        </div>
    );
}

export default PieceOfPlanetTota;