import { Link } from "react-router-dom";

function AdminOptions() {

    return (
        <div className="admin-options-container">
            <div className="admin-options-header">
                <h1 className="admin-options-title">Admin Options</h1>
            </div>
            <hr />
            <div className="admin-options-content">
                <Link to='#' className="admin-options-link">Blog Categories</Link>
            </div>
        </div>
    );
}

export default AdminOptions;