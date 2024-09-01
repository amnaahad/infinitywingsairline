import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
        setFormError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            setFormError('Please fill out all fields.');
            return;
        }

        // Perform your form submission logic here
        setFormSubmitted(true);
    };

    return (
        <div>
            <div className="container-fluid contact bg-white py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
                        <h5 className="section-title px-3">Contact Us</h5>
                        <h1 className="mb-0">Contact For Any Query</h1>
                    </div>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-4">
                            <div className="bg-light rounded p-4">
                                <div className="text-center mb-4">
                                    <i className="fa fa-map-marker-alt fa-3x text-primary"></i>
                                    <h4 className="text-primary">Address</h4>
                                    <p className="mb-0">Airport Road, Nur Khan AirBase, RWP</p>
                                </div>
                                <div className="text-center mb-4">
                                    <i className="fa fa-phone-alt fa-3x text-primary mb-3"></i>
                                    <h4 className="text-primary">Mobile</h4>
                                    <p className="mb-0">+92 345 6789075</p>
                                    <p className="mb-0">+92 345 6237890</p>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-envelope-open fa-3x text-primary mb-3"></i>
                                    <h4 className="text-primary">Email</h4>
                                    <p className="mb-0">infinitywingsinfo@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-light rounded">
                            <h3 className="mb-1">Send us a message</h3>
                            <p className="mb-3">If you have any query please feel free to contact us</p>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                id="name"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control border-0"
                                                id="email"
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                id="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control border-0"
                                                placeholder="Leave a message here"
                                                id="message"
                                                style={{ height: "150px" }}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            ></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 py-3 mb-3" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                    {formError && (
                                        <div className="col-12">
                                            <p style={{ color: 'red' }}>{formError}</p>
                                        </div>
                                    )}
                                    {formSubmitted && !formError && (
                                        <div className="col-12">
                                            <p style={{ color: 'green' }}>Your request has been sent successfully!</p>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
