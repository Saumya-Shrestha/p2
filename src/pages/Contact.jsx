import React from 'react';
import '../App.css';
import SmallBanner from '../components/SmallBanner';
import ContactCard from '../components/ContactCard';
import Form from '../components/Form';
import Map from '../components/Map';

const Contact = ({ mode }) => {
  return (
    <>
      <div className={`bg-${mode}`}>
        <SmallBanner
          title='Contact Us'
          mode={mode}
        />
        <div className={`container-fluid px-5 my-5 text-${mode === 'dark' ? 'light' : 'dark'} contact-padding`}>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <h3 className='fs-2 fw-bold'>Let's Connect!</h3>
              <p className={`text-${mode === 'dark' ? 'light' : 'dark'} mb-4`}>
                Your thoughts, questions, and feedback are what help us grow and improve. Whether you've encountered an issue, have a suggestion, or
                just want to share your experience, we're here to listen. Reach out to us using the form below or through any of the other contact
                methods provided. Let's make your luxury experience even better, together.
              </p>
              <div className='mb-3'>
                <ContactCard
                  mode={mode}
                  icon='at'
                  text='reservations@hamrohotel.com'
                />
                <ContactCard
                  mode={mode}
                  icon='phone'
                  text='+977 1 2345678'
                />
                <ContactCard
                  mode={mode}
                  icon='location-dot'
                  text='123 Durbar Marg, Kathmandu, Nepal'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <Form mode={mode} />
            </div>
          </div>
        </div>

        <div className='container-fluid px-0'>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
