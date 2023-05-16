import { useState, useEffect } from "react";

import contactImage from "../assets/images/contact_img.jpg";

function ContactPage() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/contact')
            .then(res => res.json())
            .then(data => {
                setSkills(data);
            })
            .catch(err => console.log('Error fetching skills: ', err));
    }, []);
    return (
        <div className="contact-container">
            <div className="contact-content-wrapper">
                <div className="contact-header">
                    <div>
                        <h1 className="contact-title">Contact Me</h1>
                        <p className="contact-subtitle">Feel free to reach out to me if you have any questions or concerns.</p>
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
                            <div className="skill-wrapper" key={skill.id}>
                                <p className="skill-name">{skill.name}</p>
                                <p className="skill-level">{skill.percent_utilized}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-map-wrapper">
                <div className="temp-map" />
            </div>
        </div>
    );
}

export default ContactPage;