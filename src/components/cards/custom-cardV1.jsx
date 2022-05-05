import React from 'react';

function CustomCardV1(props) {
    const { cards } = props;
    return (
        <>{cards.map((item, i) => {
            return (
                <div key={i} className="custom_cardV1">
                    <div className="card_header">
                        <div className="img_wrapper">
                            <img src={item.img} alt={item.img} className="img-fluid" />
                        </div>
                    </div>
                    <div className="card_content">
                        <h5>{item.hd}</h5>
                        <p>
                            {item.para}
                        </p>
                        {item.btn}
                    </div>
                </div>
            );
        })

        }
        </>
    );
}

export default CustomCardV1;
