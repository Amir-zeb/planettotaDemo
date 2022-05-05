import React, { Component, useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import OrangeBtn from '../components/btn/orangebtn';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [
                {
                    url: '/piece-of-planet-tota', txt: 'Own a Piece of PT', hd: 'Own a Piece of <span>Planet Tota</span>'
                },
                {
                    url: '/planet-tota-metaverse', txt: 'Planet Tota MetaVerse', hd: 'Planet <span>Tota MetaVerse</span>'
                },
                {
                    url: '/sep-movie-in-production', txt: 'Sep Movie-in Production', hd: 'Sep Movie-in <span>Production</span>'
                },
                {
                    url: '/lil-totaverse', txt: "Lil' TotaVerse", hd: "Lil' <span>TotaVerse</span>"
                },
                {
                    url: '/movies-series-to-follow', txt: 'Movies/Series to Follow', hd: 'Movies/Series to <span>Follow</span>'
                },
                {
                    url: '/meet-the-firsts', txt: 'Meet the Firsts', hd: 'Meet the <span>Firsts</span>'
                },
                {
                    url: '/become-a-citizen', txt: 'Become a Citizen', hd: 'Become a <span>Citizen</span>'
                },
            ],
        }
    }

    componentDidMount() {
        document.title = "Home | PlanetTota";
    }

    render() {
        return (
            <>
                <Header />
                <main className='home_page top_padd'>
                    <section className='home_banner'>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <HomeBanner
                                        li={this.state.listItems}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer extraclass='abs_footer' />
            </>
        );
    }
}

function HomeBanner(props) {
    var [index, setindex] = useState(0);

    setInterval(() => {
        if (index >= props.li.length - 1) {
            return;
        } else if (index >= 0) {
            console.log(index);
            return setindex(++index);
        }
        // if (index >= props.li.length - 1) {
        //     console.log(index);
        //     return setindex(0);
        // } else if (index >= 0) {
        //     console.log(index);
        //     return setindex(++index);
        // }
    }, 3000);

    return (
        <div className="flex_wrapper">
            <ul className='links_ul'>
                {
                    props.li.map((item, i) => {
                        return (
                            <li key={i} className={index === i ? 'active' : ''}>
                                <Link to={item.url}><span className='circle_style'></span>{item.txt}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="banner">
                <h1 dangerouslySetInnerHTML={{ __html: props.li[index].hd }}></h1>
                <OrangeBtn
                    txt='Check Out Now'
                    url={props.li[index].url}
                    extraclass='bg_orange common_btn banner_btn'
                    icon={faLongArrowAltRight} />
            </div>
            {/* <div className="banner">
                <h1>Own a piece of
                    <span>Planet Tota</span>
                </h1>
                <OrangeBtn
                    txt='Check Out Now'
                    url='/'
                    extraclass='bg_orange common_btn banner_btn'
                    icon={faLongArrowAltRight} />
            </div> */}
        </div>
    );
}

function MyLi(props) {
    return (
        <>
            {
                props.li.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link to={item.url}><span className='circle_style'></span>{item.txt}</Link>
                        </li>
                    );
                })
            }
        </>
    );
}

export default Home;