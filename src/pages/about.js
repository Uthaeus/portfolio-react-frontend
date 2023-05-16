import { useState } from 'react';

import aboutImage from '../assets/images/about_img.jpeg';

import AboutListItem from '../components/about/about-list';
import AboutSocialItem from '../components/about/about-social';
import { set } from 'react-hook-form';

function AboutPage() {
    const [coursesToggled, setCoursesToggled] = useState(false);
    const [coursesDisplayed, setCoursesDisplayed] = useState(false);
    const [projectsToggled, setProjectsToggled] = useState(false);
    const [projectsDisplayed, setProjectsDisplayed] = useState(false);
    const [socialsToggled, setSocialsToggled] = useState(false);
    const [socialsDisplayed, setSocialsDisplayed] = useState(false);

    const courses = [
        'Full Stack Web Development Bootcamp',
        'React - The Complete Guide (incl Hooks, React Router, Redux)',
        'The Complete JavaScript Course 2021: From Zero to Expert!',    
        'The Complete Node.js Developer Course (3rd Edition)',
    ];

    const projects = [
        'Portfolio Website',
        'Blog Website',
        'E-Commerce Website',
        'Social Media Website',
        'Chat Application',
    ];

    function halfSecond() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 450);
        });
    }

    function recentCoursesToggler() {
        if (!coursesToggled === true) {
            setCoursesToggled(!coursesToggled);
        } else {
            let tempList = document.getElementById('courses-list');
            tempList.classList.remove('show');
            tempList.classList.add('hide');
            halfSecond().then(() => {
                setCoursesToggled(!coursesToggled);
            });
        }
    }

    function recentProjectsToggler() {
        if (!projectsToggled === true) {
            setProjectsToggled(!projectsToggled);
        } else {
            let tempList = document.getElementById('projects-list');
            tempList.classList.remove('show');
            tempList.classList.add('hide');
            halfSecond().then(() => {
                setProjectsToggled(!projectsToggled);
            });
        }
    }

    function socialsToggler() {
        if (!socialsToggled === true) {
            setSocialsToggled(!socialsToggled);
        } else {
            let tempList = document.getElementById('socials-list');
            tempList.classList.remove('show');
            tempList.classList.add('hide');
            halfSecond().then(() => {
                setSocialsToggled(!socialsToggled);
            });
        }
    }

    let coursesContent = (
        <div id='courses-list' className='courses-list show'>
            {courses.map(course => <AboutListItem key={course} title={course} type='course' />)}
        </div>
    );

    let projectsContent = (
        <div id='projects-list' className='projects-list show'>
            {projects.map(project => <AboutListItem key={project} title={project} type='project' />)}
        </div>
    );

    let socialsContent = (
        <div id='socials-list' className='socials-list show'>
            <AboutSocialItem />
        </div>
    );
    
    return (
        <div className="about-container">
            <div className="about-image-wrapper">
                <img className="about-image" src={aboutImage} alt="profile" width="90%" height="700px" />
            </div>

            <div className="about-content-wrapper">
                <h1 className="about-title">About Me</h1>
                <p className="about-content">I am a full-stack web developer with a passion for learning and creating. I have a background in education and I am currently working as a teacher. I am looking to transition into a career in web development. I am a hard worker and a quick learner. I am looking for a position where I can continue to learn and grow as a developer.</p>

                <div className='about-actions'>
                    <button className='about-button' onClick={recentCoursesToggler}>Recent Courses</button>
                    <button className='about-button' onClick={recentProjectsToggler}>Recent Projects</button>
                    <button className='about-button' onClick={socialsToggler}>Socials</button>
                </div>

                <div className="about-list-wrapper">
                    {coursesToggled && coursesContent}
                    {projectsToggled && projectsContent}
                    {socialsToggled && socialsContent}
                </div>
            </div>
        </div>
    );
}

export default AboutPage;