import { useState, useEffect, useRef } from "react";

import contactImage from "../assets/images/contact_img.jpg";
import SkillContactItem from "../components/skills/skill-contact-item";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
    const [skills, setSkills] = useState([]);
    const [isForm, setIsForm] = useState(false);

    const contactFormEnd = useRef(null);

    

    useEffect(() => {
        fetch('http://localhost:4000/contact')
            .then(res => res.json())
            .then(data => {
                setSkills(data);
            })
            .catch(err => console.log('Error fetching skills: ', err));
    }, []);

    function contactFormHandler() {
        setIsForm(false);
    }

    function contactFormToggle() {
        let isToggled = !isForm === true ? true : null;

        setIsForm(!isForm);

        if (isToggled) {
            window.scrollTo({
                top: document.getElementById('contact-form-end').offsetTop - 100,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-content-wrapper">
                <div className="contact-header">
                    <div>
                        <h1 className="contact-title">Contact Me</h1>
                        <p className="contact-subtitle">Feel free to reach out to me if you have any questions or concerns.</p>
                        <button className="contact-btn" onClick={contactFormToggle}>Contact Me</button>
                        
                    </div>
                    <div className="contact-image" style={{
                        backgroundImage: `url(${contactImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }} />
                </div>

                <div className="contact-content-wrapper">
                    <div className="contact-info-wrapper">
                        <p className="contact-info name">Homer Simpson</p>
                        <p className="contact-info"><i className="bi bi-envelope-at-fill"></i>: test@test.com</p>
                        <p className="contact-info"><i className="bi bi-telephone-fill"></i>: 555-555-5555</p>
                        <p className="contact-info"><i className="bi bi-geo-alt-fill"></i>: 123 Fake Street, Springfield, USA</p>
                    </div>

                    <div className="skills-wrapper">
                        <h2 className="skills-title">Skills</h2>
                        {skills.map(skill => (
                            <SkillContactItem key={skill.id} skill={skill} />
                        ))}
                    </div>
                </div>
                <div id="contact-form">
                    {isForm && <ContactForm contactFormHandler={contactFormHandler} />}
                </div>
                <div id='contact-form-end' ref={contactFormEnd} />
            </div>

            <div className="contact-map-wrapper">
                <div className="temp-map" />
            </div>
        </div>
    );
}

export default ContactPage;