import React, { useState } from 'react';
import './FirstPage.css';

const FirstPage = () => {
    const [activeSection, setActiveSection] = useState('Home');

    const renderContent = () => {
        switch (activeSection) {
            case 'Home':
                return (
                    <div>
                        <h2>Welcome to Paws Haven Animal Shelter!</h2>
                        <p>
                            Paws Haven is a dedicated platform designed to assist animal shelters and the people who care 
                            about animals. Whether you're a doctor managing the shelter or a customer looking to adopt or 
                            pick up your pet, our platform makes it easier and more efficient.
                        </p>
                        <p>
                            Explore our services, meet adorable animals waiting for a loving home, and make a difference 
                            in their lives. Together, we can provide every animal with the love and care they deserve.
                        </p>
                    </div>
                );
            case 'About':
                return (
                    <div>
                        <h2>About Paws Haven</h2>
                        <p>
                            Paws Haven Animal Shelter Application is designed to bridge the gap between doctors managing 
                            shelters and customers who want to adopt or collect their pets. 
                        </p>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>
                                <strong>For Doctors:</strong> Easily update the status of animals, mark them as 
                                available for adoption, or remove them when they've found a new home. You can also schedule 
                                appointments for customers to pick up their pets.
                            </li>
                            <li>
                                <strong>For Customers:</strong> View a list of adorable animals available for adoption. 
                                If your pet is already in the shelter, check the date and time for when you can pick them up.
                            </li>
                        </ul>
                        <p>
                            Our platform includes essential details like animal names, breeds, owner information, 
                            shelter joining dates, and unique codes, ensuring transparency and efficient management.
                        </p>
                        <p>
                            At Paws Haven, we believe every animal deserves love, care, and a forever home. Join us 
                            in making a positive impact!
                        </p>
                    </div>
                );
            case 'Services':
                return (
                    <div>
                        <h2>Our Services</h2>
                        <ul>
                            <li>
                                <strong>Adoption Services:</strong> Browse through animals waiting for a loving home. 
                                Detailed profiles include names, breeds, and pictures to help you find your perfect match.
                            </li>
                            <li>
                                <strong>Appointment Scheduling:</strong> Doctors can set specific dates and times for 
                                customers to pick up their animals, ensuring an organized experience for all.
                            </li>
                            <li>
                                <strong>Animal Management:</strong> Doctors can update animal statuses, whether they're 
                                available for adoption, already adopted, or scheduled for pickup.
                            </li>
                            <li>
                                <strong>User Registration:</strong> Both doctors and customers can register with a unique 
                                username and password, ensuring personalized and secure access.
                            </li>
                        </ul>
                        <p>
                            Paws Haven simplifies shelter operations and improves communication between doctors and customers, 
                            making it easier to provide loving care for every animal.
                        </p>
                    </div>
                );
            case 'Contact':
                return (
                    <div>
                        <h2>Contact Us</h2>
                        <p>
                            We'd love to hear from you! Whether you have questions, want to adopt, or need assistance 
                            with your shelter appointments, feel free to get in touch with us.
                        </p>
                        <p><strong>Email:</strong> support@pawshaven.com</p>
                        <p><strong>Phone:</strong> +1 (234) 567-890</p>
                        <p><strong>Visit Us:</strong> Paws Haven Animal Shelter, 123 Main Street, Your City</p>
                        <p>
                            Together, we can give every animal a better tomorrow. Thank you for being part of the Paws Haven family!
                        </p>
                    </div>
                );
            default:
                return <p>Welcome to Paws Haven!</p>;
        }
    };
    

    return (
        <div className='backgroundImage'>
        <div className="main-page">
            <div className="navigation-menu">
                <ul>
                    {['Home', 'About', 'Services', 'Contact'].map((section) => (
                        <li
                            key={section}
                            className={activeSection === section ? 'active' : ''}
                            onClick={() => setActiveSection(section)}
                        >
                            {section}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="content">
                <div className="white-box">
                    {renderContent()}
                </div>
            </div>
        </div>
        </div>
    );
};

export default FirstPage;
