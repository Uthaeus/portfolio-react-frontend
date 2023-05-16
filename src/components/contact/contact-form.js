import { useForm } from "react-hook-form";

function ContactForm({ contactFormHandler }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitHandler(data) {
        let dataToSend = {
            contact: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                link: data.link,   
                body: data.body
            }
        };

        fetch('http://localhost:4000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(res => {
            if (res.ok) {
                contactFormHandler();
                return res.json();
            }
        })
        .catch(err => console.log('Error sending contact form: ', err));
    }

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name *</label>
                    <input type='text' className="form-control" {...register('name', { required: true })} />
                    {errors?.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email *</label>
                    <input type='email' className="form-control" {...register('email', { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="row mb-3">
                    <div className="form-group col-md-5">
                        <label htmlFor="phone">Phone</label>
                        <input type='text' className="form-control" {...register('phone')} />
                    </div>

                    <div className="form-group col-md-7">
                        <label htmlFor="link">Link</label>
                        <input type='text' className="form-control" {...register('link')} placeholder="Leave a link :)" />
                    </div>
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="body">Message *</label>
                    <textarea className="form-control" {...register('body', { required: true })} rows={5} />
                    {errors?.body && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Contact Me</button>
            </form>
        </div>
    );
}

export default ContactForm;