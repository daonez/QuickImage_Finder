import React, { useState } from 'react';
// const { REACT_APP_PIXABAY_API_KEY } = process.env;
// const pixabayURL = 'https://pixabay.com/api';
// const pixaAPI_KEY = REACT_APP_PIXABAY_API_KEY;

// axios
//     .get(`${pixabayURL}/?key=${pixaAPI_KEY}&q=${search}&image_type=photo&per_page=${amount}`)
//     .then((res) => setImages(res.data.hits))
//     .catch((err) => console.log(err));

const ImageGrid = ({ images }) => {
    const [loadImage, setLoadImage] = useState(false);
    const [imageSize, setImageSize] = useState('');

    const handleOpen = (img) => {
        setLoadImage(true);
        setImageSize(img);
    };

    const handleClose = () => {
        setLoadImage(false);
    };

    return (
        <div>
            {images.map((img) => (
                <div key={img.id}>
                    <img src={img.webformatURL} alt="" />
                    <div title={img.tags}></div>
                    <div title={img.user_id}></div>
                    <div title={img.views}></div>
                </div>
            ))}
            <button open={loadImage} onClose={handleClose}></button>
            <button onClick={handleOpen}></button>
            <img src={imageSize} alt="" style={{ width: '100%' }} />
            <button onClick={handleClose} color="primary">
                close
            </button>
        </div>
    );
};

export default ImageGrid;
