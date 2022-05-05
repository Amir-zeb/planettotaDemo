import React, { useState } from 'react';
import MyModal from '../modal/mymodal';
import VideoPlayer from '../videoPlayer';

function CustomCardV4(props) {
    const { cards } = props;
    const [modalShow, setmodalShow] = useState(false);
    const [source, setsource] = useState(null);

    const OpenMyModal = (source) => {
        return (
            setmodalShow(true),
            setsource(source)
        );
    }
    return (
        <>
            {cards.map((item, i) => {
                return (
                    <div key={i} className="custom_cardV4">
                        <div className="card_header">
                            <div className="vid_wrapper" onClick={() => OpenMyModal(item.source)}>
                                <img src={item.poster} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="card_content">
                            <h5>{item.hd}</h5>
                            <p>
                                {item.para}
                            </p>
                        </div>
                    </div>
                );
            })}

            <MyModal
                show={modalShow}
                onHide={() => setmodalShow(false)}
                bodycontent={<VideoPlayer source={source} />}
                extraclass='video_modal'
                size='width'
            />
        </>
    );
}

export default CustomCardV4;
