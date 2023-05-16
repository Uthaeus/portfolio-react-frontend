import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ContactItem from "./contact-item";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/contacts')
            .then(res => res.json())
            .then(data => {
                setContacts(data);
                setIsLoading(false);
            })
            .catch(err => console.log('Error fetching contacts: ', err));
    }, []);

    return (
        <div>
            <h1>Contacts</h1>
            <div>
                {isLoading && <p>Loading...</p>}
                {!isLoading && contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}
            </div>
            <Link to="/admin">Back to Admin</Link>
        </div>
    );
}

export default Contacts;