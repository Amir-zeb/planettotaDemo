import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function OrangeBtn(props) {
    const { url, txt, icon, extraClass, clickEvent } = props;
    return (
        <>
            {url ? <Link to={url} className={extraClass ? extraClass : 'common_btn bg_orange'} >{txt}{icon && <FontAwesomeIcon icon={icon} />}</Link>
                :
                <button onClick={() => clickEvent()} className={extraClass ? extraClass : 'common_btn bg_orange'} >{txt}{icon && <FontAwesomeIcon icon={icon} />}</button>}
        </>
    );
}

export default OrangeBtn;