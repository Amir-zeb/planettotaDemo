import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomCardV2(props) {
    const { cards } = props;
    return (
        <>
            {cards.map((item, i) => {
                return (
                    <div key={i} className="custom_cardV2">
                        <div className="card_header">
                            <div className="img_wrapper">
                                <img src={item.img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="card_content">
                            <h5 className="title">{item.title}</h5>
                            <p className="name">
                                {item.name}
                            </p>
                            <div className="icon_wrapper">
                                {item.icons.map((x, y) => {
                                    return (
                                        <div className="wrap_icon" key={y}>
                                            <Link to={x.url} ><FontAwesomeIcon icon={x.icon} /></Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CustomCardV2;