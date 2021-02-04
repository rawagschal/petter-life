import React, {useState} from 'react';

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
    if(!selectedFile) return;
    uploadImage(previewSource);
  }

  const uploadImage = (base64EncodedImage) => {
      console.log(base64EncodedImage);
  }

  return (
    <div>
      <div>Upload Photo</div>
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
  )
}

export default PhotoUploader;