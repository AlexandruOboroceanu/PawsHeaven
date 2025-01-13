import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const uploadImage = async (file: File) => {
  const storage = getStorage();
  const storageRef = ref(storage, 'pets/' + file.name); // Store the image in a folder named "pets"
  
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
    }, 
    (error) => {
      console.error('Upload failed:', error);
    }, 
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      
      await setDoc(doc(db, 'pets', 'your-pet-id'), {
        name: 'Fluffy',
        breed: 'Labrador',
        image: downloadURL 
      });

      console.log('Image uploaded and URL saved to Firestore');
    }
  );
};
