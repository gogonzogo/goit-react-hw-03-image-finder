export const Button = ({ state, onClick }) => {
  const { images, page, totalHits } = state;
  const totalPages = Math.ceil(totalHits / 12);
  if (images.length > 0 && totalPages > page) {
    return (
      <button className="Button" onClick={()=> onClick(totalPages)}>
        Load More
      </button>
    );
  } else if (totalPages === page) {
    return <h3 className="endOfImgText">End of Image Results</h3>;
  } else {
    return null;
  }
};