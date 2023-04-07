const ImagePopup = ({ card, onClose }) => {
  return (
    <div
      className={
        card ? `popup popup_opened popup_type_photo` : `popup popup_type_photo`
      }
      onClick={onClose}
    >
      <div
        className="popup__container popup__container_type_photo"
        onClick={(evt) => evt.stopPropagation()}
      >
        <figure className="full-photo-container">
          <img
            className="full-photo"
            src={card ? card.link : "#"}
            alt={card ? card.name : ""}
          />
          <figcaption className="full-photo-container__caption">
            {card ? card.name : ""}
          </figcaption>
        </figure>
        <button
          className="close-button"
          type="button"
          aria-label="Кнопка закрытия окна полноразмерного фото"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default ImagePopup;
