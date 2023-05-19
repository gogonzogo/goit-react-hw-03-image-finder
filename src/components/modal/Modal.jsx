

export const Modal = ({ openModal, image, imgTag }) => {
  return  openModal && (<div className="overlay">
      <div className="modal">
        <img src={image} alt={imgTag}/>
      </div>
    </div >
  );
};