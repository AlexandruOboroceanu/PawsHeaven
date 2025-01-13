import React from 'react';
import './LoginSingup/PetCard.css';
import { useNavigate } from 'react-router-dom';


interface PetCardProps {
  image: string;
  name: string;
  breed: string;
}

const PetCard: React.FC<PetCardProps> = ({ image, name, breed }) => {

  const navigate = useNavigate();
    
    const handleFormRedirect = () => {
        navigate('/HiringForm');
    };

  return (
    <div className="pet-card">
      <img src={image} alt={name} className="pet-image" />
      <h3 className="pet-name">{name}</h3>
      <p className="pet-breed">{breed}</p>
      <button onClick={handleFormRedirect} className="adopt-button">
        Adopt Me
      </button>
    </div>
  );
};

export default PetCard;
