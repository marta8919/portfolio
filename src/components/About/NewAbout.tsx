import React from 'react'
import style from './NewAbout.module.css'

export default function NewAbout(){

    // let hobbiesArr=[
    //     {hobbie: 'frontend', img: 'https://res.cloudinary.com/martacloud/image/upload/v1615912463/undraw_media_player_ylg8_px5fsc.png'},
    //     {hobbie: 'productivity', img: 'https://res.cloudinary.com/martacloud/image/upload/v1615911655/undraw_To_do_re_jaef_gwdxck.png'},
    //     {hobbie: 'reading', img: 'https://res.cloudinary.com/martacloud/image/upload/v1615911785/undraw_social_serenity_vhix_xiqlnt.png'},
    //     {hobbie: 'yoga', img:'https://res.cloudinary.com/martacloud/image/upload/v1615911785/undraw_social_serenity_vhix_xiqlnt.png'}
    // ]

    return(
        <div className={'general_wrapper_about'} id={'about'}>
        <div className={'section_wrapper'} >
            <div>
                <p className={'general_title'}>About</p>
                <p>
                    I discovered programming around 2017 when I was working as a
                    tech Recruiter. I remember very well, I had an interview with
                    someone for a Javascript Developer role, he had learned Javascript
                    on his own just following the freecodecamp.org exercises. I got
                    curious so I checked that website the very same day.
                </p>
                <p>
                    I remember the first surprise when I wrote  my first "Hello World".
                    From that moment on, the idea of
                    actually learning more about it kind of got stuck on my brain. Kept
                    doing some tutorials, free intro courses I could find here and
                    there. But finally, in 2020 is when I took the decision to give
                    it a try, so, after some research, in January 2021 I enrolled the full time
                    Fullstack Development bootcamp with Ironhack.
                </p>
            </div>

            <div style={{marginTop: '55px', paddingBottom: '55px'}}>
                <p className={'general_title'}>Tech stack</p>
                <div className={'section_skills_wrapper'}>
                    <div>
                    <img width="512" alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"/>
                    {/*<p>Javascript</p>*/}
                    </div>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'/>
                        {/*<p>Typescript</p>*/}
                    </div>
                    <div>
                    <img width="512" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/>
                    {/*<p>React</p>*/}
                    </div>
                    <div>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'}/>
                    {/*<p>Redux</p>*/}
                    </div>
                    <div>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'}/>
                    {/*<p>CSS</p>*/}
                    </div>
                    <div>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'}/>
                    {/*<p>HTML</p>*/}
                    </div>
                </div>

            </div>

            {/*<div>*/}
            {/*    <p className={'general_sub_title'}>Hobbies</p>*/}
            {/*    <div className={style.cards_wrapper}>*/}
            {/*    {hobbiesArr.map((item)=>*/}
            {/*    <div className={style.card}>*/}
            {/*        <img src={item.img}/>*/}
            {/*        <p>{item.hobbie}</p>*/}
            {/*    </div>*/}
            {/*    )}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        </div>
    )
}