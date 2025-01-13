import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage'; // Import necessary functions
import PetCard from '../Components/PetCard';

interface Pet {
  id: string;
  name: string;
  breed: string;
  image: string; 
}

const AdoptionPage = () => {

  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsCollection = collection(db, 'pets');
        const petSnapshot = await getDocs(petsCollection);
        const storage = getStorage(); // Initialize Firebase Storage
        const petList = await Promise.all(
          petSnapshot.docs.map(async (doc) => {
            const data = doc.data();
            const imageName = data.image; // Image file name or path in Firebase Storage


            const imageRef = ref(storage, imageName); 
            const imageUrl = await getDownloadURL(imageRef); 

            return {
              id: doc.id,
              name: data.name || 'Unknown',
              breed: data.breed || 'Unknown',
              image: imageUrl, // Set the actual image URL here
            };
          })
        );
        
        setPets(petList); // Set the fetched pet list
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching pets:', error);
        setError('Failed to load pets. Please try again later.');
        setLoading(false); // Set loading to false even in case of error
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <div>Loading pets...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  return (
    <div>
      <h2>Adopt a Pet</h2>
      <div className="pet-card-container">
        {pets.map((pet) => (
          <PetCard key={pet.id} image={pet.image} name={pet.name} breed={pet.breed} />
        ))}
      </div>
    </div>
  );
};

export default AdoptionPage;
