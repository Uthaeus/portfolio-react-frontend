import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import SkillForm from "./skill-form";

function EditSkill() {
    const [skill, setSkill] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/skills/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSkill(data);
            })
            .catch((err) => console.log('Error fetching skill: ', err));
    }, [id]);

    return (
        <div>
            <h1>Edit Skill</h1>
            <hr />
            <SkillForm skill={skill} />
            <Link to="/skills">Back to Skills</Link>
        </div>
    );
}

export default EditSkill;