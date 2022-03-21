import React, {MouseEventHandler, useState} from 'react';
import InfoIcon from '@material-ui/icons/Info';
import Folder from '@material-ui/icons/Folder';
import Book from '@material-ui/icons/Book';
import Contact from '@material-ui/icons/ContactMail';

export default function Navbar(){

    let [X, setX]= useState(0)

    const handleClick:(id: string)=> void | MouseEventHandler = (id)=>{
        if(id === 'blog'){
            window.location.assign('https://martagg.medium.com/')
        }

        // if(id === 'curriculum'){
        //     window.location.assign('https://www.canva.com/design/DAE2q5sT6vc/XjFD_JOuY5pC_nsukmgkBw/view?utm_content=DAE2q5sT6vc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
        // }

        console.log('handle click',id, document.getElementById(id))

        let element= document.getElementById(id)
        if(element) element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    const moveBar = (e: any)=>{
        let x = e.clientX;
        if(x) setX(window.innerWidth-x)
    }

    let itemsArray=['about', 'projects', 'blog', 'contact']

    const returnIcon: (arg: string)=> any = (tag)=>{
        switch (tag){
            case 'about':
                return <InfoIcon/>
                break;
            case 'projects':
                return <Folder/>
                break;
            case 'blog':
                return <Book/>
                break;
            case 'contact':
                return <Contact/>
                break;
            default:
                return null
        }
    }


    return(
        <div className={'navbar_wrapper'}>
            {/*<div className={style.highlight_bar} style={{width:X+'px'}}></div>*/}
            <div className={'sub_wrapper'} onMouseOver={moveBar} onMouseOut={()=> setX(0)}>
            {itemsArray.map((singleItem)=>
                <div className={'navbar_item'} onClick={()=>handleClick(singleItem)}>
                    {returnIcon(singleItem)}
                    <div className={'navbar_child'}>{singleItem}</div>
                </div>
            )}

            </div>


        </div>
    )
}