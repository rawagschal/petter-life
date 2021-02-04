import React, { useState } from "react";
import './index.css';

function PhotoUploader() {
      
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState('');

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault()
    if(!previewSource) return;
    uploadImage(previewSource);
  }

  const uploadImage = async (base64EncodedImage) => {
      console.log(base64EncodedImage);
      try {
        await fetch('/api/addPetPhoto', {
        method: 'POST',
        body: JSON.stringify({data: base64EncodedImage}),
        headers: {'Content-type': 'application/json'}
        })
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div className="AddPetSection">
      <div className="AddPetContainer">
        <div className="AddPetTitle">Add Your Pet's Photo To The Adoption Listing</div>
          <form onSubmit={handleSubmitFile} className="form">
            <input 
              type="file" 
              name="image" 
              onChange={handleFileInput}
              value={fileInputState}
              className="PhotoUploadInput"/>
            <button className="PhotoUploadInput" type="submit">Submit</button>
          </form>
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{height: '300px'}} />
          )}
      </div>
    </div>
);
}

export default PhotoUploader;