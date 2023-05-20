import { ImageGalleryItem } from '../image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

export const ImageGallery = ({ state, handleGalleryClick }) => {
  const { searchFail, images, modalOpen, modalImg, modalImgAlt } = state;
  if (searchFail) {
    return <h1 className="noImagesText">No images found with your search</h1>;
  } else {
    return (
      <ul className="ImageGallery" onClick={e => handleGalleryClick(e)}>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
        <Modal openModal={modalOpen} image={modalImg} imgTag={modalImgAlt} />
      </ul>
    );
  }
};
