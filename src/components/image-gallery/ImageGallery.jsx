import { ImageGalleryItem } from '../image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

export const ImageGallery = ({ state, handleGalleryClick }) => {
  const { images, modalOpen, modalImg, modalImgAlt } = state;

  return (
    <ul className="ImageGallery" onClick={e => handleGalleryClick(e)}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
      <Modal openModal={modalOpen} image={modalImg} imgTag={modalImgAlt} />
    </ul>
  );
};
