import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <hr />
            <div>
                
            </div>
        </div>
    );
}

export default Skills;