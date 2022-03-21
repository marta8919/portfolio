import React from 'react';
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function NewProjects(){

    let projectsArr=[
        {img: 'https://res.cloudinary.com/martacloud/image/upload/v1647890557/angled-floating-iphone-x-mockup-against-a-transparent-backdrop-a13833_2_c9z0ki.png',
        link: 'https://the-social-code.herokuapp.com/',
            date: 'March, 2021',
        title: 'The Social Code',
        description: 'The Social Code is a fullstack web application, build as a personal project, with the idea of creating a platform that would allow developers to stay in touch.',
        stack: ['React', 'NodeJs', 'MongoDB', 'MaterialUi'],
        check: [{tag: 'deployed', icon: LanguageIcon, text: 'Check it out!', link: 'https://the-social-code.herokuapp.com/'},
            {tag: 'repository', icon: GitHubIcon, text: 'Repository (client)', link: 'https://github.com/marta8919/the-social-code-client'},
            {tag: 'repository', icon: GitHubIcon, text: 'Repository (server)', link: 'https://github.com/marta8919/the-social-code-client'}
        ]},

        {img: "https://res.cloudinary.com/martacloud/image/upload/v1647890557/angled-floating-iphone-x-mockup-against-a-transparent-backdrop-a13833_3_c71zbh.png",
            link: 'http://flatme.herokuapp.com/',
            date: 'February, 2021',
            title: 'Flatme',
            description: 'Fullstack application, build with the idea to connect a\n' +
                '                                community and allow them to share their reviews of districts\n' +
                '                                around the world.',
            stack: ['Javascript', 'NodeJs', 'MongoDB', 'Bootstrap'],
            check: [{tag: 'deployed', icon: LanguageIcon, link: 'https://flatme.herokuapp.com/', text: 'Check it out!'},
                {tag: 'repository', icon: GitHubIcon, link: 'https://github.com/marta8919/flatme', text: 'Repository'}]},

        {img: 'https://res.cloudinary.com/martacloud/image/upload/v1647890807/iphone-x-mockup-against-transparent-background-a17152_tvr4bh.png',
            link: 'https://marta8919.github.io/veggie-wars-game/',
            date: 'January, 2021',
            title: 'Game',
            description: 'First project after two weeks of study of Javascript. Basic\n' +
                '                                game, the user must avoid the obstacles on the canvas and grab\n' +
                '                                the prices to increase score.',
            stack: ['Javascript', 'HTML', 'CSS'],
            check: [{tag:'deployed', icon: LanguageIcon, link:'https://marta8919.github.io/veggie-wars-game/', text: 'Check it out!'},
                {tag:'repository', icon: GitHubIcon, link:'https://github.com/marta8919/veggie-wars-game', text: 'Repository'}]}
    ]

    const renderIcon: (arg: string)=> void =(tag)=>{
        switch (tag){
            case 'repository':
                return <GitHubIcon/>
                    break;
            default:
                return <LanguageIcon/>
        }
    }

    return(
        <div className={'general_wrapper'} id={'projects'}>
            <div className={'section_wrapper'}>
                <h1 className={'general_title'}>Projects</h1>

                <div className={'section_wrapper'}>
                    {projectsArr.map((singleProject)=>
                    <div className={'project_card'}>
                        <img className={'project_screenshot'} src={singleProject.img}/>
                        <div className={'project_inner_section'}>
                            <p className={'general_sub_title'}>{singleProject.title}</p>
                            <p className={'muted_text'}>{singleProject.date}</p>
                            <p className={'project_description'}>{singleProject.description}</p>
                            <div className={'project_stack_wrapper'}>
                            {singleProject.stack.map((eachStack)=>
                                <div className={'stack_tag'}>
                                    #{eachStack}
                                </div>)}
                            </div>
                            <div className={'project_stack_wrapper'}>
                                {singleProject.check.map((checkLink)=>
                                    <div className={'project_links_card'}>{renderIcon(checkLink.tag)}
                                        <div style={{marginLeft: '5px'}}><a href={checkLink.link}>{checkLink.text}</a></div>
                                    </div>)}
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>

        </div>
    )
}