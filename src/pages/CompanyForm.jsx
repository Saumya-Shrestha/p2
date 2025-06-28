import React, { useState } from 'react';
import SmallBanner from '../components/SmallBanner';

const CompanyForm = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The form has been submitted.');
  };

  return (
    <>
      <SmallBanner title='Company Registration' />
      <div className={`bg-${mode} bg-gradient`}>
        <div className='container py-5'>
          <div className='row justify-content-center'>
            <h4 className={`${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'} fs-2 fw-bold text-center pb-4`}>
              Let's Register Your Company!
            </h4>
            <div className='col-md-6 mb-4'>
              <div className={`card shadow-lg rounded-4 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-0'}`}>
                <div className='card-body p-4'>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                      <label
                        htmlFor='companyName'
                        className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                      >
                        <i className='bi bi-building me-2'></i>
                        Company Name
                      </label>
                      <input
                        type='text'
                        className={`form-control py-2 px-3 rounded-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                        id='companyName'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter company name'
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        htmlFor='companyAddress'
                        className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                      >
                        <i className='bi bi-geo-alt me-2'></i>
                        Address
                      </label>
                      <input
                        type='text'
                        className={`form-control py-2 px-3 rounded-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                        id='companyAddress'
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                        placeholder='Enter address'
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        htmlFor='companyPhone'
                        className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                      >
                        <i className='bi bi-telephone me-2'></i>
                        Phone
                      </label>
                      <input
                        type='number'
                        className={`form-control py-2 px-3 rounded-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                        id='companyPhone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Enter phone number'
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        htmlFor='companyEmail'
                        className={`form-label ${mode === 'dark' ? 'text-light' : ''}`}
                      >
                        <i className='bi bi-envelope me-2'></i>
                        Email Address
                      </label>
                      <input
                        type='email'
                        className={`form-control py-2 px-3 rounded-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : ''}`}
                        id='companyEmail'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter email address'
                      />
                    </div>
                    <button
                      className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2 mt-2`}
                      type='submit'
                    >
                      <i className='bi bi-send me-2'></i>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className={`card shadow-lg rounded-4 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-0'}`}>
                <div className='card-body p-4'>
                  <h5 className='mb-3 fw-bold'>Live Preview</h5>
                  <ul className='list-group list-group-flush ps-0'>
                    <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`}>
                      <i className='bi bi-building me-2'></i>
                      <strong>Company Name:</strong> {formData.name || 'N/A'}
                    </li>
                    <li className={`list-group-item ps-0  ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`}>
                      <i className='bi bi-geo-alt me-2'></i>
                      <strong>Address:</strong> {formData.address || 'N/A'}
                    </li>
                    <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`}>
                      <i className='bi bi-telephone me-2'></i>
                      <strong>Phone:</strong> {formData.phone || 'N/A'}
                    </li>
                    <li className={`list-group-item ps-0 ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light border-0'}`}>
                      <i className='bi bi-envelope me-2'></i>
                      <strong>Email Address:</strong> {formData.email || 'N/A'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyForm;
