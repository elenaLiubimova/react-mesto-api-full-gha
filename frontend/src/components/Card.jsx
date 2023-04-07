import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  // Функция открытия полноразмерного фото
  function handleClick() {
    onCardClick(card);
  }

  // обработчик нажатия лайка
  function handleLike() {
    onCardLike(card);
  }

  function handleDelete() {
    onCardDelete(card);
  }

  const { currentUser } = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((like) => like._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `like-button ${
    !isLiked && "like-button_inactive"
  }`;

  return (
    <li className="card">
      {isOwn && (
        <button
          className="delete-button"
          onClick={handleDelete}
          type="button"
          aria-label="Кнопка удаления фото"
        />
      )}
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__title-and-like">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Кнопка 'Нравится'"
            onClick={handleLike}
          />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
