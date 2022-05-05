import React from 'react';
import { Badge } from 'react-bootstrap';
import { icon_lock } from '../../assets/img';
import OrangeBtn from '../btn/orangebtn';

function CustomCardV3(props) {
    const { cards } = props;
    return (
        <>
            {cards.map((item, i) => {
                return (
                    < div className={item.lock ? 'custom_cardV3 card_locked' : 'custom_cardV3'} key={i}>
                        {item.lock &&
                            <div className="lock_img">
                                <img src={icon_lock} alt="icon_lock" />
                            </div>}
                        <div className="card_header">
                            <div className="img_wrapper">
                                <img src={item.img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="card_content">
                            <h5>{item.hd}</h5>
                            <div className="wrapper">
                                {item.sup &&
                                    <div>
                                        <span className="span_hd">Superpower</span>
                                        {item.sup.map((item, i) => {
                                            return <Badge className='bg_darkpurp' bg='none' key={i}>{item}</Badge>
                                        })}
                                    </div>
                                }
                                {item.cat &&
                                    <div>
                                        <span className="span_hd">Classification</span>
                                        {item.cat.map((item, i) => {
                                            return <Badge className='bg_orange' bg='none' key={i}>{item}</Badge>
                                        })}
                                    </div>
                                }
                            </div>
                            <p className="para">
                                {item.para}
                            </p>
                            {item.btn &&
                                <div>
                                    {
                                        item.btn !== 'none' ?
                                            <OrangeBtn
                                                url='/meet-the-firsts/nft-minting-mint-coming-soon'
                                                txt='Mint it' />
                                            :
                                            <button className='bg_grey common_btn'>Not Available To purchase Now</button>
                                    }
                                </div>
                            }

                        </div>
                    </div>
                );
            })
            }
        </ >
    );
}

export default CustomCardV3;
