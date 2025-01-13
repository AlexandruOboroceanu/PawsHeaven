import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import app from '../App';

const FileFetcher = ({ refresh, onFilesFetched }) => {
  const [files, setFiles] = useState([]);

  const fetchFromStorage = async () => {
    try {
      // Initialize Firebase Storage
      const storage = getStorage(app);

      // Reference to the directory containing images
      const listRef = ref(storage, "images/");

      // List all files in the directory
      const res = await listAll(listRef);

      // Fetch URLs for each file and store them in an array
      const urls = await Promise.all(
        res.items.map((itemRef) => getDownloadURL(itemRef))
      );

      // Set the URLs in state
      setFiles(urls);

      // Pass the files to the parent component via the callback
      if (onFilesFetched) {
        onFilesFetched(urls);
      }
    } catch (error) {
      console.error("Error fetching files from storage:", error);
    }
  };

  useEffect(() => {
    fetchFromStorage();
  }, [refresh]); // Trigger fetch when `refresh` changes

  return null; // The component doesn't need to render anything
};

export default FileFetcher;
