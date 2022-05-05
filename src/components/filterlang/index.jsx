import React from 'react';
import { multi_lang } from '../../assets/img';

function FilterLang() {
    return (
        <>
            <div className="filter">
                <form action="">
                    <label htmlFor="">
                        <div className="img_wrapper">
                            <img src={multi_lang} alt={multi_lang} className="img-fluid" />
                        </div>
                        Language</label>
                    <select>
                        <option value="">English</option>
                        <option value="">Vietnamese</option>
                        <option value="">Arabic</option>
                    </select>
                </form>
            </div>
        </>
    );
}

export default FilterLang;