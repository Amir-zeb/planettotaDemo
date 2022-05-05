import React from 'react';

function GetInTouchFrom(props) {

    return (
        <form action="">
            <h3 className='form_hd'>Get In Touch
                <span className='form_para'>Interested in learning more about our platform?</span>
            </h3>
            <div className="input_wrapper">
                <input type="text" name="" id="" placeholder='Name*' />
            </div>
            <div className="input_wrapper">
                <input type="Email" name="" id="" placeholder='Email*' />
            </div>
            <div className="input_wrapper">
                <textarea name="" id="" rows="5" placeholder='Message'></textarea>
            </div>
            <p className='para'>Your personal information will be treated in accordance with TODO privacy policy</p>
            <input type="submit" value="Submit" className='common_btn bg_orange' />
        </form >
    );
}

export default GetInTouchFrom;