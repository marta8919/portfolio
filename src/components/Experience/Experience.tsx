import React from 'react';

export default function Experience(){

    return(
        <div id={'experience'} className={'general_wrapper'}>
            <div className={'divider'}></div>
            <div className={'section_wrapper'}>
                <div className={'general_title'}> Experience</div>
                <div>
                    <p>Frontend Developer</p>
                    <p>VoiceLine</p>
                    <p>April 2021 - currently</p>
                    <ul>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Redux</li>
                        <li>Storybook</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>
                <div>
                    <p>Tech Recruiter</p>
                    <p>FREE NOW</p>
                    <p>Webhelp</p>
                    <p>Alphanumeric</p>
                    <p>Hays Response</p>
                    <p>Randstad</p>
                </div>

                <div>
                    <div>Education</div>
                </div>

                <button>Download CV</button>
            </div>

        </div>
    )
}