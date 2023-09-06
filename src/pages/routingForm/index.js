import React, { useState } from 'react'
import './routingForm.scss';
import signupImage from '../../assets/img/signupImage.png'
import InputField from '../../components/inputFields/inputFields';
import { Button } from '../../components/inputFields/button';
import { validateForm } from '../../utils/validationForm';

export const RoutingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      debugger
      console.log("Form Submitted with the following data:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };
  return (
    <div className='form-page'>
        <div className="content-row">
        <div className="col-6">
          <img src={signupImage}/>
        </div>
        <div className="col-6">
        <div>
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Enter your name"
        label="Name"
        name='name'
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        type="email"
        placeholder="Enter your email"
        label="Email"
        name='email'
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        type="tel"
        placeholder="Enter your telephone"
        label="Telephone"
        name='telephone'
        value={formData.telephone}
        onChange={handleChange}
        error={errors.telephone}
      />
      <InputField
        type="text"
        placeholder="Enter your company"
        label="Company"
        name='company'
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
      />
      <InputField
        type="text"
        placeholder="Enter your message"
        label="Message"
        name='message'
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />
      <Button label='Submit For Review' backgroundColor='#8CC63F' className='formButton' type='submit'/>
      </form>
    </div>
        </div>
      </div>
    </div>
  )
}
