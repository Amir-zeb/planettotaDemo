import React, { useState } from 'react';
import MyModal from '../modal/mymodal';
import VideoPlayer from '../videoPlayer';

function CustomCardV5(props) {
    const { cards } = props;
    const [modalShow, setmodalShow] = useState(false);
    const [flag, setflag] = useState(null);
    const [source, setsource] = useState(null);

    const OpenMyModal = (source, flag) => {
        return (
            setmodalShow(true),
            setflag(flag),
            setsource(source)
        );
    }
    return (
        <>
            {cards.map((item, i) => {
                return (
                    <div key={i} className={item.extraclass + ' custom_cardV5'}>
                        <div className="card_header">
                            <div className="poster_wrapper" onClick={() => OpenMyModal(item.source, item.vidFlag)}>
                                <img src={item.poster} alt={item.poster} className="img-fluid" />
                            </div>
                        </div>
                        <div className="card_content">
                            <h5 className='title'>{item.title}</h5>
                        </div>
                    </div>
                );
            })}
            <MyModal
                show={modalShow}
                onHide={() => setmodalShow(false)}
                bodycontent={flag ? <VideoPlayer source={source} /> : <img src={source} alt={source} className='img-fluid' />}
                extraclass='video_modal'
                size='width'
            />
        </>
    );
}

export default CustomCardV5;
