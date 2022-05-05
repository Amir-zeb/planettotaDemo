import React from 'react';
import VideoPlayer from '../videoPlayer';
import { Container } from 'react-bootstrap';

function Banner(props) {
    return (
        <section className='banner controls_hidden'>
            <VideoPlayer source={props.source} />
            {props.sec &&
                <Container className="floating_sec">
                    {props.sec}
                </Container>
            }
        </section>
    );
}

export default Banner;