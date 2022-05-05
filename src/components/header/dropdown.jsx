import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomDropdown(props) {
    return (
        <ul className='custom_dropdown'>
            {
                props.dropItem.map((item, i) => {
                    return (
                        <li key={i}>
                            <Nav.Link as={Link} to={item.url}>{item.txt}</Nav.Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default CustomDropdown;