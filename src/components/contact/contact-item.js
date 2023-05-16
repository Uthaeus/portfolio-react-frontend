

function ContactItem({ contact }) {

    return (
        <div className="contact-item-wrapper">
            <h1>{contact.name}</h1>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.link}</p>
            <p>{contact.body}</p>
        </div>
    );
}

export default ContactItem;