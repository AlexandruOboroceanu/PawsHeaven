import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../Pages/HiringForm.css';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    petName: '',
    petBreed: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'adoptionApplications'), formData);
      alert('Application submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        petName: '',
        petBreed: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting the application. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Adoption Application Form</h2>
      <form onSubmit={handleSubmit} className="adoption-form">
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Home Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pet Name:
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Pet Breed:
          <input
            type="text"
            name="petBreed"
            value={formData.petBreed}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Additional Message (Optional):
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-button">Submit Application</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
