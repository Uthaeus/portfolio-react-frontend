
function SkillContactItem({ skill }) {
    let percent = skill.percent_utilized;

    return (
        <div className="w-100 mb-3 border-bottom pb-1">
            <p>{skill.name}</p>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{width: `${percent}%`}} />
            </div>
        </div>
    );
}

export default SkillContactItem;