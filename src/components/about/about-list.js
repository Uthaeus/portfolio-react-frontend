

function AboutListItem({ title, type }) {
    
    return (
        <div className='card about-list-item-card'>
            <p className="list-item">{title}</p>
            <div className={`list-item-border ${type}`} />
        </div>
    );
}

export default AboutListItem;