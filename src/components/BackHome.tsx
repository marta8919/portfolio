import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

interface Props{
    action: ()=> void,
}

export default function BackHome(props: Props){

    return(
        <div className={'back_button_wrapper'}>
            <button onClick={props.action} className={'back_button'}>
            <ArrowUpwardIcon/>
            </button>
        </div>

    )
}