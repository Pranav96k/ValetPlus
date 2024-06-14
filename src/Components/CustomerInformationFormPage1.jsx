import React, { useState } from 'react';
import FormPage1Status from '../assests/images/CustomerFormPage1StatusImage.png';

const CustomerInformationFormPage1 = () => {
  const CompanyType = [
    "Hotel", "Restaurant", "Bar", "Pub", "Hospital", 
    "Railway Station", "Bus Station", "Airport", "Mall", "Valet Agency"
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    tehshil: '',
    district: '',
    state: '',
    country: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission if validation passes
      console.log('Form submitted', formData);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-custom-blue">
      <div className="relative bg-white w-11/12 rounded-lg shadow-lg p-6 flex flex-col max-w-4xl mx-auto">
        <div className='md-6'>
          <img src={FormPage1Status} alt="Form Status" />
        </div>
        <h2 className="text-2xl font-bold mb-6 mt-5 text-center">Customer Information</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <label className="block text-gray-1000">Company Name</label>
            <input 
              type="text" 
              name="companyName" 
              className={`w-1/2 px-3 py-2 border rounded-md ${errors.companyName ? 'border-red-500' : ''}`} 
              placeholder='Enter name of the company' 
              value={formData.companyName} 
              onChange={handleChange} 
              required/>
          </div>
          <div className='space-y-2'>
            <label className='block text-gray-1000'>Company Type</label>
            <select 
              name="companyType" 
              className={`w-1/2 px-3 py-2 border rounded-md ${errors.companyType ? 'border-red-500' : ''}`} 
              value={formData.companyType} 
              onChange={handleChange} 
              required>
              <option value="" className="text-gray-500" disabled>Select the Company Type</option>
              {CompanyType.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </select>
          </div>
          <hr className="border-t border-gray-400 my-4"></hr>

          <div className='flex space-x-3'>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">Address Line 1</label>
                <input 
                  type="text" 
                  name="addressLine1" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.addressLine1 ? 'border-red-500' : ''}`} 
                  placeholder='Enter address line 1' 
                  value={formData.addressLine1} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">Address Line 2</label>
                <input 
                  type="text" 
                  name="addressLine2" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.addressLine2 ? 'border-red-500' : ''}`} 
                  placeholder='Enter address line 2' 
                  value={formData.addressLine2} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div> 
          </div>

          <div className='flex space-x-3'>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">City</label>
                <input 
                  type="text" 
                  name="city" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.city ? 'border-red-500' : ''}`} 
                  placeholder='Enter city' 
                  value={formData.city} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">Tehshil</label>
                <input 
                  type="text" 
                  name="tehshil" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.tehshil ? 'border-red-500' : ''}`} 
                  placeholder='Enter tehshil' 
                  value={formData.tehshil} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div> 
          </div>

          <div className='flex space-x-3'>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">District</label>
                <input 
                  type="text" 
                  name="district" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.district ? 'border-red-500' : ''}`} 
                  placeholder='Enter district' 
                  value={formData.district} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">State</label>
                <input 
                  type="text" 
                  name="state" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.state ? 'border-red-500' : ''}`} 
                  placeholder='Enter state' 
                  value={formData.state} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
          </div>

          <div className='flex space-x-3'>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">Country</label>
                <input 
                  type="text" 
                  name="country" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.country ? 'border-red-500' : ''}`} 
                  placeholder='Enter country' 
                  value={formData.country} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            <div className='flex-auto'>
              <div className='space-y-2'>
                <label className="block text-gray-1000">Pincode</label>
                <input 
                  type="text" 
                  name="pincode" 
                  className={`w-full px-3 py-2 border rounded-md ${errors.pincode ? 'border-red-500' : ''}`} 
                  placeholder='Enter pincode' 
                  value={formData.pincode} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>  
          </div>
          <div className='flex justify-end'>
            <button type="button" className="text-black bg-white-700 hover:bg-gray-200 rounded-lg text-sm px-10 py-2.5 me-6 border">BACK</button>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-10 py-2.5">NEXT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerInformationFormPage1;