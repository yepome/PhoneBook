import React from 'react';

import '../../css/contact.css';

const ContactFom = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (event) => {

    const { name, value } = event.target;

    props.updateField(name, value);
  }

  return (
    <div className="mt-3">
        <h3>Contact Form</h3>

        <form autoComplete="off" noValidate onSubmit={handleSubmit} className="mt-3">
            <div className="row mb-3">
                <label className="col-sm-5 col-form-label col-form-label-sm text-end">Last name</label>
                <div className="col-sm-7">
                    <input name="lastName" value={props.contact.lastName} onChange={handleChange} className="form-control form-control-sm" required />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-5 col-form-label col-form-label-sm text-end">First name</label>
                <div className="col-sm-7">
                    <input name="firstName" value={props.contact.firstName} onChange={handleChange} className="form-control form-control-sm" required />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-5 col-form-label col-form-label-sm text-end">Phone number</label>
                <div className="col-sm-7">
                    <input name="phoneNumber" value={props.contact.phoneNumber} onChange={handleChange} className="form-control form-control-sm" required />
                </div>
            </div>

            <div className="row mb-3">
                <label className="col-sm-5 col-form-label col-form-label-sm text-end">Email</label>
                <div className="col-sm-7">
                    <input name="email" value={props.contact.email} onChange={handleChange} className="form-control form-control-sm" type="email" required />
                </div>
            </div>

            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default ContactFom;
