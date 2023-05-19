export const ImageGalleryItem = ({image}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        data-value={image.largeImageURL}
        alt={image.tags}
        width="100px"
      />
    </li>
  );
};