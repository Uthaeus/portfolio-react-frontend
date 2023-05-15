import { Link } from "react-router-dom";

import SkillForm from "./skill-form";


function NewSkill() {

    return (
        <div>
            <h1>New Skill</h1>
            <hr />
            <SkillForm />
            <Link to="/skills">Back to Skills</Link>
        </div>
    );
}

export default NewSkill;