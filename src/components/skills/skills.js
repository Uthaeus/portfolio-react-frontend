import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SkillItem from "./skill-item";

function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/skills")
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
            })
            .catch((err) => console.log('Error fetching skills: ', err));
    }, []);

    return (
        <div className="container">
            <h1>Skills</h1>
            <Link to="/skills/new">Add Skill</Link>
            <hr />
            <div>
                {skills.map((skill) => <SkillItem key={skill.id} skill={skill} />)}
            </div>
        </div>
    );
}

export default Skills;