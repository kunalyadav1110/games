import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import "firebase/compat/storage";

function Firebase() {

    const firebaseConfig = {
        apiKey: "AIzaSyDF1C9Nn78f7k_CEyQ0GitSV6EAkTQB4LE",
        authDomain: "learning-c2884.firebaseapp.com",
        projectId: "learning-c2884",
        storageBucket: "learning-c2884.appspot.com",
        messagingSenderId: "1054770098126",
        appId: "1:1054770098126:web:5f3c48745ef31996ec859f",
        measurementId: "G-N6Y1RZ69LT"
      };
    
      firebase.initializeApp(firebaseConfig);
      const storage = firebase.storage();
      const [image, setImage] = useState("")
      const [imageUrl, setImageUrl] = useState("")
      const handleImage = (e)=>{
        setImage(e.target.files[0])
      }
    
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setImageUrl(url)
              });
          }
        );
      };

  return (
    <div>
    <input onChange={(e) => handleImage(e)} type='file'></input>
      <button onClick={()=> handleUpload()} className='h-[5vh] w-[60px] bg-red-500'>Submit</button>
      <div>
        <img src={imageUrl}></img>
      </div>
    </div>
  )
}

export default Firebase
