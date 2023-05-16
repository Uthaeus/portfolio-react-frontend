import { Link } from "react-router-dom";

function AdminOptions() {

    return (
        <div className="admin-options-container">
            <div className="admin-options-header">
                <h1 className="admin-options-title">Admin Options</h1>
            </div>
            <hr />
            <div className="admin-options-content">
                <Link to='/categories' className="admin-options-link">Blog Categories</Link>
                <Link to='/skills' className="admin-options-link">Skills</Link>
                <Link to='/contacts' className="admin-options-link">Contacts</Link>
            </div>
        </div>
    );
}

export default AdminOptions;