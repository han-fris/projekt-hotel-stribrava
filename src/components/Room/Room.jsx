export const Room = ({ picture, name, price, alt }) => {
  return (
    <>
      <div className="card">
        <img className="card__image" src={picture} alt={alt} />
        <div className="card__title">{name}</div>
        <div className="card__body">{price}kč na osobu</div>
      </div>
    </>
  );
};
