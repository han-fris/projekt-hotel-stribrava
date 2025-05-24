export const Room = ({ picture, name, price, alt, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img className="card__image" src={picture} alt={alt} />
        <div className="card__title">{name}</div>
        <div className="card__body">{price} kč na osobu</div>
      </div>
    </>
  );
};
