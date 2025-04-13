import React, { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddImage = () => {
    if (imageUrl.trim() !== '') {
      setImages([...images, imageUrl]);
      setImageUrl('');
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Image Gallery Application</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          style={{ padding: '8px', width: '300px' }}
          data-testid="image-input"
        />
        <button 
          onClick={handleAddImage}
          style={{ padding: '8px 16px', marginLeft: '10px' }}
          data-testid="add-button"
        >
          Add Image
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px'
      }}>
        {images.map((url, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={url}
              alt={`Gallery Image ${index}`}
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover', 
                cursor: 'pointer',
                borderRadius: '8px'
              }}
              onClick={() => setSelectedImage(url)}
              data-testid="gallery-image"
            />
            <button
              onClick={() => handleDeleteImage(index)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
              data-testid="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setSelectedImage(null)}
          data-testid="modal"
        >
          <img
            src={selectedImage}
            alt="Large View"
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90%', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return <ImageGallery />;
};

export default App;