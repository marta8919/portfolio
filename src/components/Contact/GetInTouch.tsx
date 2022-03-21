import React from 'react';
import style from './GetInTouch.module.css'

export default function GetInTouch(){

    let contactLinks=[
        {tag: 'LinkedIN',
        href: 'www.linkedin.com'},
        {tag: 'GitHub',
        href: 'githum'}
    ]


    return(
        <div>
            <div>
                <div>get in touch</div>
                <div>IMG</div>
                <div>list of links</div>
                {contactLinks.map((one)=>
                <div>
                    <p>{one.tag}</p>
                </div>)}
            </div>

        </div>
    )
}