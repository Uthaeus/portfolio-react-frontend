import { useState } from 'react';

import aboutImage from '../assets/images/about_img.jpeg';

import AboutListItem from '../components/about/about-list';
import AboutSocialItem from '../components/about/about-social';

function AboutPage() {
    const [coursesToggled, setCoursesToggled] = useState(false);
    const [projectsToggled, setProjectsToggled] = useState(false);
    const [socialsToggled, setSocialsToggled] = useState(false);

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

    function recentCoursesToggler() {
        setCoursesToggled(!coursesToggled);
    }

    function recentProjectsToggler() {
        setProjectsToggled(!projectsToggled);
    }

    function socialsToggler() {
        setSocialsToggled(!socialsToggled);
    }
    
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
                    {coursesToggled && courses.map(course => <AboutListItem key={course} title={course} type='course' />)}
                    {projectsToggled && projects.map(project => <AboutListItem key={project} title={project} type='project' />)}
                    {socialsToggled && <AboutSocialItem />}
                </div>
            </div>
        </div>
    );
}

export default AboutPage;