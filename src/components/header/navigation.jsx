import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import CustomDropdown from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function MyNav(props) {
    return (
        <ul className='nav_ul'>
            {
                props.navItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <div className="wrapper">
                                <Nav.Link as={Link} to={item.url}>{item.txt}</Nav.Link>
                                {item.dropdown && <FontAwesomeIcon icon={faChevronDown} />}
                            </div>
                            {
                                item.dropdown &&
                                <CustomDropdown dropItem={item.dropdown} />
                            }
                        </li>
                    );
                })
            }
        </ul >
    );
}

export default MyNav;