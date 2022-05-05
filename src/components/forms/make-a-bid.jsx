import React from 'react';
import { icon_upload } from '../../assets/img';

function MakeBidForm(props) {
    return (
        <form className="make_a_bid_form">
            <h4 className='form_hd'>Make a bid</h4>
            <div className="input_wrapper">
                <input type="text" name="" id="" placeholder='Name*' />
            </div>
            <div className="input_wrapper">
                <input type="email" name="" id="" placeholder='Email*' />
            </div>
            <div className="input_wrapper">
                <input type="tel" name="" id="" placeholder='Phone number' />
            </div>
            <div className="input_wrapper">
                <input type="text" name="" id="" placeholder='Loyalty percentage (%)*' />
            </div>
            <div className="input_wrapper">
                <div className='custom_upload_file'>
                    <label htmlFor='img_pick' className='wrapper'>
                        <img src={icon_upload} alt={icon_upload} className="img-fluid" />
                    </label>
                    <span>Upload your portfolio</span>
                    <input type="file" name="" id="img_pick" className='d-none' />
                </div>
            </div>
            <div className="aggreement">
                <label className="custom_checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <p>
                    Agreement statement goes here-Basically it'll tell them how creating artworks/fan art doesn't give them any rights to the characters. Also how usage at our end will be subject to approval etc.
                </p>
            </div>
            <input type="submit" value="Submit" className='common_btn bg_orange' />
        </form>);
}

export default MakeBidForm;