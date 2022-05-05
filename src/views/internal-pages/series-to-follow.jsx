import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Col, Container, Row } from 'react-bootstrap';
import FilterLang from '../../components/filterlang';
import OrangeBtn from '../../components/btn/orangebtn';
import { placeholder_lg, bg7, nft6, nft4, nft2 } from '../../assets/img';
import CustomCardV3 from '../../components/cards/custom-cardV3';
import Section from '../../components/section';

class SeriesToFollow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviearr:
            {
                sechd: 'Live-Action Short Films Series - The Lab Rats',
                secpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                cards: [
                    {
                        img: bg7,
                        hd: 'Film 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                    {
                        img: bg7,
                        hd: 'Film 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                    {
                        img: bg7,
                        hd: 'Film 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                ]
            },
            seriesarr:
            {
                sechd: 'Live-Action Episodic Series',
                secpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                cards: [
                    {
                        img: bg7,
                        hd: 'Series 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                    {
                        img: bg7,
                        hd: 'Series 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                    {
                        img: bg7,
                        hd: 'Series 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                ]
            },
            animearr:
            {
                sechd: 'Lil Legends Animation Series',
                secpara: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                cards: [
                    {
                        img: bg7,
                        hd: 'Series 1',
                        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque alias dolorum illo minima magnam sequi distinctio sunt eius magni debitis dolore error voluptatibus porro doloribus ducimus eveniet iste, rerum quae!',
                        sup: ['Supar Strength', 'Super Speed'],
                    },
                ]
            }
        }
    }
    componentDidMount() {
        document.title = "Movies/Series to Follow | PlanetTota";
    }
    render() {
        return (
            <>
                <Header />
                <main className='series_follow_page top_padd'>
                    <section className='intro_sec'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <h2 className="col_hd text-center">
                                        Planned Movies/Series
                                    </h2>
                                    <p className="col_para">
                                        The movie/series plan and how the next 5 years are going to filled width excitment blah blah
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <FilterLang />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='common_sec inverse_col'>
                        <Container>
                            <Section
                                img={nft6}
                                hd='Live Action Movie 2-Do Te'
                                para='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis numquam accusantium ea! Possimus incidunt ad assumenda id! Atque ad assumenda, minus dolore quidem at nulla numquam possimus non vitae.'
                                btn={
                                    <OrangeBtn
                                        url='/'
                                        txt='Buy Sep NFTs'
                                    />
                                }
                            />
                        </Container>
                    </section>
                    <section className='common_sec'>
                        <Container>
                            <Section
                                img={nft4}
                                hd='Live Action Movie 2-Do Te'
                                para='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis numquam accusantium ea! Possimus incidunt ad assumenda id! Atque ad assumenda, minus dolore quidem at nulla numquam possimus non vitae.'
                                col1class='order-1'
                                btn={
                                    <OrangeBtn
                                        url='/'
                                        txt='Buy Sep NFTs'
                                    />
                                }
                            />
                        </Container>
                    </section>
                    <section className='common_sec inverse_col'>
                        <Container>
                            <Section
                                img={nft2}
                                hd='Live Action Movie 2-Do Te'
                                para='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis numquam accusantium ea! Possimus incidunt ad assumenda id! Atque ad assumenda, minus dolore quidem at nulla numquam possimus non vitae.'
                                btn={
                                    <OrangeBtn
                                        url='/'
                                        txt='Buy Sep NFTs'
                                    />
                                }
                            />
                        </Container>
                    </section>
                    <FeaturedSec
                        arr={this.state.moviearr}
                    />
                    <FeaturedSec
                        arr={this.state.seriesarr}
                    />
                    <FeaturedSec
                        arr={this.state.animearr}
                    />
                </main>
                <Footer />
            </>
        );
    }
}

// function Section(props) {
//     const { img, hd, para, btn, col1class } = props;
//     return (
//         <>
//             <Row>
//                 <Col lg={6} md={6} sm={12} className={col1class}>
//                     <h4>{hd}</h4>
//                     <p>{para}</p>
//                     {btn && btn}
//                 </Col>
//                 <Col lg={6} md={6} sm={12}>
//                     <div className="img_wrapper">
//                         <img src={img} alt={img} className="img-fluid" />
//                     </div>
//                 </Col>
//             </Row>
//         </>
//     );
// }

function FeaturedSec(props) {
    const { arr } = props;
    return (
        <section className='repeated_sec'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="col_hd text-center">
                            {arr.sechd}
                        </h2>
                        <p className="col_para">
                            {arr.secpara}
                        </p>
                        <div className="flex_wrapper">
                            <CustomCardV3
                                cards={arr.cards}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SeriesToFollow;