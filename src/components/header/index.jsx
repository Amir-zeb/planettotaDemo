import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import MyNav from './navigation';
import { site_logo } from '../../assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {
                    url: '/',
                    txt: 'Home',
                    dropdown: [
                        {
                            url: '/piece-of-planet-tota', txt: 'Own a Piece of Planet Tota',
                        },
                        {
                            url: '/planet-tota-metaverse', txt: 'Planet Tota MetaVerse',
                        },
                        {
                            url: '/sep-movie-in-production', txt: 'Sep Movie-in Production',
                        },
                        {
                            url: '/lil-totaverse', txt: "Lil' TotaVerse",
                        },
                        {
                            url: '/movies-series-to-follow', txt: 'Movies/Series to Follow',
                        },
                        {
                            url: '/meet-the-firsts', txt: 'Meet the Firsts',
                        },
                        {
                            url: '/become-a-citizen', txt: 'Become a Citizen',
                        },
                    ],
                },
                { url: '/explore-synergies', txt: 'Explore Synergies' },
                { url: '/tota-creators-collective', txt: 'Tota Creators Collective' },
                { url: '/about-us', txt: 'About Us' },
            ],
            toggleChange: false
        }
    }

    handleToggle = () => {
        return this.setState({ toggleChange: !this.state.toggleChange });
    }

    render() {
        return (
            <header className={this.state.toggleChange ? 'active' : ''}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={site_logo} alt={site_logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => this.handleToggle()}>
                            <FontAwesomeIcon icon={faBars} />
                        </Navbar.Toggle>
                        <Navbar.Collapse className='justify-content-end'>
                            <MyNav
                                navItems={this.state.navItems}
                            />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header >
        );
    }
}

export default Header;