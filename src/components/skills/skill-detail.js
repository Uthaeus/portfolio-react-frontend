import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SkillDetail() {
    const [skill, setSkill] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:4000/skills/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSkill(data);
                setIsLoading(false);
            })
            .catch((err) => console.log('Error fetching skill: ', err));
    }, [id]);

    function skillDeleteHandler() {
        fetch(`http://localhost:4000/skills/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("portfolio_token")}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    navigate("/skills");
                    return res.json();
                }
                throw res;
            })
            .catch((err) => console.log('Error deleting skill: ', err));
    }

    return (
        <div>
            <h1>Skill Detail</h1>
            <hr />
            {isLoading && <p>Loading...</p>}

            {!isLoading && (
                <>
                    <h3>{skill.name}</h3>
                    <p>{skill.percent_utilized}</p>
                    <Link to="/skills">Back to Skills</Link>
                    <Link to={`/skills/${skill.id}/edit`}>Edit Skill</Link>
                    <button onClick={skillDeleteHandler}>Delete Skill</button>
                </>
            )}
        </div>
    );
}

export default SkillDetail;
