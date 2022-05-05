import React from 'react';
// import { icon_play } from '../../assets/img';

import { LionPlayer } from 'lion-player';
import '../../../node_modules/lion-player/dist/lion-skin.min.css';

function VideoPlayer(props) {
    return (
        <>
            <LionPlayer
                sources={props.source}
                muted
                loop
            />
        </>
    );
}

export default VideoPlayer;