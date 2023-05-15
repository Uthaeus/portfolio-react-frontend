import { Link } from "react-router-dom";

function SkillItem({ skill }) {
    return (
        <Link to={`/skills/${skill.id}`} className="skill-item">
            <h3>{skill.name}</h3>
        </Link>
    );
}

export default SkillItem;